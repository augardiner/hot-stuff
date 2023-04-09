CREATE TABLE tracks (
 week VARCHAR,          
 rank INTEGER,          
 track VARCHAR,         
 artist VARCHAR,        
 spotify_id VARCHAR,    
 id UUID PRIMARY KEY,   
 energy FLOAT,          
 danceability FLOAT,    
 valence FLOAT,         
 liveness FLOAT,        
 speechiness FLOAT,     
 acousticness FLOAT,    
 instrumentalness FLOAT,
 tempo FLOAT,           
 loudness FLOAT,        
 key INTEGER,           
 mode INTEGER,          
 time_signature INTEGER
);

CREATE TABLE yearly_average (
 week VARCHAR,          
 energy FLOAT,          
 valence FLOAT,         
 liveness FLOAT,        
 speechiness FLOAT,     
 acousticness FLOAT,    
 instrumentalness FLOAT,
 tempo FLOAT,           
 loudness FLOAT,        
 danceability FLOAT
);