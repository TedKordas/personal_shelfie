UPDATE bins
SET name = $3, price = $4
WHERE shelf_id = $1 AND bin_id = $2
