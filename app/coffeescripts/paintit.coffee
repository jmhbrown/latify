paintIt = (element, bgColor, tColor) ->
	element.style.backgroundColor = bgColor
	if tColor?
		element.style.color = tColor
