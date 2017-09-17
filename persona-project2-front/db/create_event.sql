INSERT INTO Events (title, description, date, starttime, endtime, venue, address, city, zipcode, imageurl, category, perks, quantofvols)
VALUES
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
returning *