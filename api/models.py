from api import db, ma


class Tracks(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    week = db.Column(db.Date)
    rank = db.Column(db.Integer)
    track = db.Column(db.String)
    artist = db.Column(db.String)
    spotify_id = db.Column(db.String)
    tempo = db.Column(db.Float)
    energy = db.Column(db.Float)
    danceability = db.Column(db.Float)
    valence = db.Column(db.Float)
    liveness = db.Column(db.Float)
    speechiness = db.Column(db.Float)
    acousticness = db.Column(db.Float)
    instrumentalness = db.Column(db.Float)
    loudness = db.Column(db.Float)

    def __init__(self, id, week, rank, track, artist, tempo, energy,
                 danceability, valence, liveness, speechiness, acousticness,
                 instrumentalness, loudness):
        self.id = id
        self.week = week
        self.rank = rank
        self.track = track
        self.artist = artist
        self.tempo = tempo
        self.energy = energy
        self.danceability = danceability
        self.valence = valence
        self.liveness = liveness
        self.speechiness = speechiness
        self.acousticness = acousticness
        self.instrumentalness = instrumentalness
        self.loudness = loudness


class TrackSchema(ma.Schema):
    class Meta:
        fields = ('id', 'week', 'rank', 'track', 'artist', 'spotify_id',
                  'energy', 'danceability', 'valence', 'liveness',
                  'speechiness', 'acousticness', 'instrumentalness',
                  'loudness', 'tempo')


class YearlyAvg(db.Model):
    index = db.Column(db.Integer, primary_key=True)
    year = db.Column(db.String)
    energy = db.Column(db.Float)
    danceability = db.Column(db.Float)
    valence = db.Column(db.Float)
    liveness = db.Column(db.Float)
    speechiness = db.Column(db.Float)
    acousticness = db.Column(db.Float)
    instrumentalness = db.Column(db.Float)
    tempo = db.Column(db.Float)


class YearlyAvgSchema(ma.Schema):
    class Meta:
        fields = ('year', 'energy', 'valence', 'liveness', 'speechiness', \
            'acousticness', 'danceability', 'instrumentalness', 'tempo')
