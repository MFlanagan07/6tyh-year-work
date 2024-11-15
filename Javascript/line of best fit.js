let Coordinates = [[8,3],[2,10],[11,3],[6,6],[5,8],[4,12],[12,1],[9,4],[6,9],[1,14]];

let x = 0;
let y = 0;


for (i=0;i<Coordinates.length;i++){
    x += Coordinates[i][0]
    y += Coordinates[i][1]
};

x = x/Coordinates.length;
y = y/Coordinates.length;

let num = 0;
let nom = 0;

for (i=0;i<Coordinates.length;i++){
    num += (Coordinates[i][0]-x)*(Coordinates[i][1]-y)
    nom += (Coordinates[i][0]-x)**2
};

let slope = num/nom;
let yint = y - (slope*x);

console.log(`Line of best fit: y = ${Math.round(slope*10)/10}x + ${Math.round(yint*10)/10}`);