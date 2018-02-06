json.array! @greetings do |greeting|
	json.extract! greeting, :id, :message
end