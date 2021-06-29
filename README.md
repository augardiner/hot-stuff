# hot-100

## The Billboard Hot 100

The [Billboard Hot 100](https://www.billboard.com/charts/hot-100) is the music industry standard record chart in the United States for songs, published weekly by Billboard magazine. Chart rankings are based on sales (physical and digital), radio play, and online streaming in the United States.

The first number one song of the Billboard Hot 100 was "Poor Little Fool" by Ricky Nelson, on August 4, 1958.

[Source](https://en.wikipedia.org/wiki/Billboard_Hot_100)

## API

The API is written in Python with the Flask framework.

**Tracks:** There is a separate script, running weekly, which scrapes the Billboard site page and adds each song into the database.

**Data:** The weekly script uses the [Spotipy](https://spotipy.readthedocs.io/en/2.18.0/) library to get [Spotify Audio Features](https://developer.spotify.com/documentation/web-api/reference/#object-audiofeaturesobject) for each track, used for visualizations.

**Endpoints:**

- /api/week/\<week> : get songs ranked 0-100 for \<week> in YYYY-MM-DD format
- /api/artist/\<artist> : get all appeareances where the artist column contains \<artist>
- /api/track/\<spotify_id> : get all appeareances of track where the spotify_id column equals \<spotify_id>
- /api/analysis/\<feature> : get the annual average and 3 year rolling average for \<feature>

## Front End

The front end is written with React.

**Visualizations:** Visualizations are created using the [amCharts](https://www.amcharts.com/) library.
