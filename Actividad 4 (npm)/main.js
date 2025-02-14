import readline from "readline";
import { stdin as input, stdout as output } from "process";
import chalk from "chalk";

const rl = readline.createInterface({ input, output });

rl.question('¿Cual es tu nombre?', (nombre)=>{
    rl.question('¿Cual es tu edad?', (edad)=>{
        let mensaje = `El usuario ${nombre} tiene una edad de ${edad}.`;

        switch (true) {
            case edad < 18:
                console.log(chalk.red(mensaje));
                break;
            case edad >= 18 && edad <= 65:
                console.log(chalk.green(mensaje));
                break;
            case edad > 65:
                console.log(chalk.blue(mensaje));
                break;
            default:
                break;
        }
        rl.close()
    })
})