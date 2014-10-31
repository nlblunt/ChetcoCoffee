json.array!(@products) do |product|
	json.id product.id
	json.name product.name
	json.description product.description
	json.price product.price

  json.image url_for(product.image.url(:medium))
end