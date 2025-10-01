// Create a function that gives a player a gun.
// The gun must implement interface Gun
interface Gun {
    id: number;
    name: string;
    damage: number;
}

function givePlayerGun(playerId: number, gun: Gun) {
    // Logic to give the player the gun
}

// you can create your guns here


// usage e.g. givePlayerGun("123", pistol)