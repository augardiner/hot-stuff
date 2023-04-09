from flask import redirect, request, jsonify
from api.models import Tracks, TrackSchema, YearlyAvg, YearlyAvgSchema
from sqlalchemy import func
from api import app
from api.funcs import get_query_week, get_rolling_avg, get_weekly_data
from flask_cors import cross_origin

track_schema = TrackSchema()
tracks_schema = TrackSchema(many=True)
yearly_schema = YearlyAvgSchema(many=True)


# api/ route redirects to current week
@app.route('/api/', methods=['GET'])
def home():
    currentWeek = get_query_week(None)
    return redirect(f'week/{currentWeek}')


# get track by id
@app.route('/api/track/<spotify_id>', methods=['GET'])
def get_track_by_id(spotify_id):
    resultObj = Tracks.query.filter_by(spotify_id=spotify_id).order_by(
        Tracks.rank).all()
    return_list = tracks_schema.dump(resultObj)
    return jsonify(return_list)


# get tracks by week
@app.route('/api/week/<week>', methods=['GET'])
def get_tracks_by_week(week):
    week = get_query_week(week)
    returnObj = {'week': week}
    songsObj = Tracks.query.filter_by(week=week).order_by(Tracks.rank).all()
    songs = tracks_schema.dump(songsObj)
    weeklyData = get_weekly_data(songs)
    returnObj['songs'] = songs
    returnObj['averages'] = weeklyData['averages']
    returnObj['avgTempo'] = weeklyData['avgTempo']
    return jsonify(returnObj)


# get tracks by artist
@app.route('/api/artist/<artist>', methods=['GET'])
def get_tracks_by_artist(artist):
    resultObj = Tracks.query.filter(
        func.lower(Tracks.artist).like(func.lower(f'%{artist}%'))).order_by(
            Tracks.week.desc()).all()
    return_list = tracks_schema.dump(resultObj)
    return jsonify(return_list)


# get yearly mean and rolling average of feature
@app.route('/api/analysis/<feature>', methods=['GET'])
def get_avg_feature(feature):
    returnObj = {}
    resultObj = YearlyAvg.query.with_entities(YearlyAvg.year,
                                              getattr(YearlyAvg, feature))
    data = yearly_schema.dump(resultObj)
    dataDict = get_rolling_avg(data)
    returnObj['feature'] = feature
    returnObj['data'] = dataDict
    return jsonify(returnObj), 200
