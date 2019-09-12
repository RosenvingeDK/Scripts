var answer = prompt("How do you prefer to travel?");

switch (answer) {
    case 'car':
        console.log("Vroom vroom, honk honk");
        break;
    case 'train':
        console.log("Choo choo, chugga chugga chugga");
        break;
    case 'plane':
        console.log("Plane sounds");
        break;
    default:
        console.log("Have a good trip travelling by " + answer);
}