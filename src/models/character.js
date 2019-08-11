
class Origin {
    name = '';
    url = '';
}

class Location {
    name = '';
    url = '';
}

class Character {
    id = 0;
    name = '';
    status = '';
    species = '';
    type = '';
    gender = '';
    origin = new Origin();
    location = new Location();
    image = '';
    episode = [];
    url = '';
    created = '';
}




export default Character;