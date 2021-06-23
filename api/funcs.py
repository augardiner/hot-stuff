from datetime import datetime, timedelta
import pandas as pd


def get_query_week(date):
    '''Returns date of either last or next Saturday in YYYY-MM-DD format
    depending on time of the week'''

    if date:
        date = datetime.strptime(date, '%Y-%m-%d')
    else:
        # for home route
        date = datetime.today()
    date_weekday = date.weekday()
    days_till_next_sat = timedelta((12 - date_weekday) % 7)
    next_sat = date + days_till_next_sat
    last_sat = next_sat - timedelta(days=7)
    if date_weekday in [
            6, 0, 1
    ] or (date_weekday == 2 and datetime.now().time() <
          datetime.now().time().replace(hour=10, minute=0)):
        return str(last_sat)[:10]
    else:
        return str(next_sat)[:10]


def get_rolling_avg(data):
    '''Takes data from yearly average query and adds 5 year rolling average'''

    feature = [i for i in data[0].keys() if i != 'year'][0]
    df = pd.DataFrame(data)
    df['rolling'] = df[feature].rolling(5).mean()
    df = df.where(pd.notnull(df), None)
    df = df.rename(columns={feature: 'value'})
    d = df.to_dict(orient='records')
    return d


def get_weekly_data(data):
    '''Takes weekly song data and returns average of each feature'''

    d = {}
    averages = []
    df = pd.DataFrame(data)
    for col in df[[
            'energy', 'danceability', 'speechiness', 'acousticness',
            'instrumentalness'
    ]]:
        tempObj = {}
        series = df[col]
        tempObj['feature'] = col.title()
        tempObj['mean'] = int(series.mean() * 100)
        tempObj['full'] = 100
        averages.append(tempObj)
    d['averages'] = averages
    d['avgTempo'] = int(df['tempo'].mean())
    return d
