import chalk from "chalk";
export default class TextColor
{
    error       = (text:string) => chalk.bgBlack.red(text);
    warn        = (text:string) => chalk.bgBlack.yellow(text);
    success     = (text:string) => chalk.bgBlack.green(text);

    bError      = (text:string) => chalk.bgRed.white.bold(text);
    bWarn       = (text:string) => chalk.bgYellow.white.bold(text);
    bSuccess    = (text:string) => chalk.bgGreen.white.bold(text);
}