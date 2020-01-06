// import sounds
import ryu from './sounds/Street Fighter 2 Ryu KO.m4r';
import kamehameha from './sounds/goku1.wav';
import tardis from './sounds/01 Tardis.m4r';
import capcom from './sounds/Capcom Intro Music.m4r';
import DBZScooter from  './sounds/DBZ scooter.m4r';
import FF7Fanfare from './sounds/FF7 Fanfare.m4r';
import FF7Bring from './sounds/FF7 bring.m4r';
import DendenMushi from './sounds/One Piece dendenmushi tone.m4r';
import ZeldaChest from './sounds/Zelda Got Item From Chest.m4r';
import ZeldaSecret from './sounds/Zelda FoundSecret.m4r';
import ZeldaFee from './sounds/Zelda The Goddess Appears.m4r';
import Hyrule from './sounds/Zelda Hyrule theme.m4r';
import Ocarina from './sounds/Zelda Ocarina Of Time Musique - Chant du temps.m4r';
import LightSaber from './sounds/Star Wars-Lightsaber.m4r';
import Utini from './sounds/Star Wars Utini.m4r';
import SondeVIper from './sounds/Star Wars sonde Viper.m4r';
import Cantina from './sounds/Star Wars Cantina Band.m4r';
import Mgs from './sounds/Metal Gear Solid Alert.m4R';
import psx from './sounds/Playstation 1 Startup Sound.m4r';
import megaman from './sounds/23 Megaman Game Start.m4r';
import dongeon from './sounds/04 Zelda Dongeon.m4r';
import chocobo from './sounds/FF Chocobo Wark.m4r';
import MarioPowerUp from './sounds/Mario Power Up.m4r';
import MarioUnderworld from './sounds/Mario underworld.m4r';
import yoshiEggSound from './sounds/mario_egg.mp3';
import Yoshi from './sounds/Mario Yoshi.m4r';
import LuigiMansion from './sounds/LuigiMansion E. Gadd Calling.m4r';
import Sonic from './sounds/Sonic Checkpoint.m4r';
import Gab1 from './sounds/MC Jean Gab1 securité.m4r';
import poupee from './sounds/Bernard Menez - Jolie Poupée.m4r';
import dracula from './sounds/Les Charlots contre Dracula.m4r';
import Musclor from './sounds/Les Maitres de l Univers.m4r';
import Jackson from './sounds/Bloodsport Jackson.m4r';
import Madame from './sounds/Madame est servie.m4r';
import prairie from './sounds/la petite maison dans la prairie.m4r';
import castlevania from './sounds/Castlevania.m4r';
import Gouls from './sounds/Gouls & Gobblins.m4r';
import konami from './sounds/KONAMI.MID';

//import image
import ryuImages from './images/RyuKO.png';
import yoshiEgg from './images/yoshiEgg.png';
import kamehamehaImage from './images/kamehameha.png';
import tardisImg from './images/tardis.png';
import zeldaChestImg from './images/zelda chest.png';
import dbScooterGif from './images/dbScooter.gif';
import lightsaberImpg from './images/lightsaber.png';
import cantina from './images/cantina.jpg';
import jawa from './images/jawa.jpg';
import viper from './images/viper.jpg';
import dendemushiImg from './images/dendenmushiImg.png';
import zeldaSecretPng from './images/zeldaTriforce.png';
import ghouls from './images/ghouls.jpg';
import castlevaniaCover from './images/castlevaniaCover.jpg';
import megamanSelect from './images/megamanSelect.jpg';
import psxBoot from './images/psx.png';
import sonicCheckpoint from './images/sonicCheckpoint.jpg';
import capcomLogo from './images/capcomLogo.jpg';

export const context = 'http://gugue.fr/sound-box/static/media/'

export const zelda = [
    {label: "Zelda chest", soundFile: ZeldaChest, image: zeldaChestImg},
    {label: "Zelda secret", soundFile: ZeldaSecret, image: zeldaSecretPng},
    {label: "Zelda dongeon", soundFile: '04%20Zelda%20Dongeon.d011fdd3.m4r'},
    {label: "Zelda Goddess", soundFile: ZeldaFee},
    {label: "Zelda Hyrule", soundFile: Hyrule},
    {label: "Zelda Ocarina", soundFile: Ocarina},
];

export const mario = [
    {label: "Mario Up", soundFile: MarioPowerUp},
    {label: "Mario underworld", soundFile: MarioUnderworld},
    {label: "Yoshi", soundFile: Yoshi},
    {label: "Yoshi Egg", soundFile: yoshiEggSound, image: yoshiEgg},
    {label: "Luigi Mansion", soundFile: LuigiMansion},
];

export const games = [
    {label: "Sonic", soundFile: Sonic, image: sonicCheckpoint},

    {label: "Capcom", soundFile: capcom, image: capcomLogo},
    {label: "Konami", soundFile: konami},
    {label: "Ryu Ko", soundFile: ryu, image: 'RyuKO.97ed6c6a.png'},

    {label: "FF7 Bring", soundFile: FF7Bring},
    {label: "FF7 Win", soundFile: FF7Fanfare},
    {label: "Chocobo", soundFile: chocobo},

    {label: "Megaman", soundFile: megaman, image: megamanSelect},
    {label: "Castlevania", soundFile: castlevania, image: castlevaniaCover},
    {label: "Gouls & Ghost", soundFile: Gouls, image: ghouls},
    {label: "MGS", soundFile: Mgs},
    {label: "PSX", soundFile: psx, image: psxBoot},
];

export const dragonBall = [
    {label: "Kamehameha", soundFile: kamehameha, image: kamehamehaImage},
     {label: "DB scooter", soundFile: DBZScooter, image: dbScooterGif},
];

export const starWars = [
    {label: "lightsaber", soundFile: LightSaber, image: lightsaberImpg},
    {label: "Cantina", soundFile: Cantina, image: cantina},
    {label: "Viper", soundFile: SondeVIper, image: viper},
    {label: "Utini", soundFile: Utini, image: jawa},
];

export const divers = [
    {label: "DenDenMushi", soundFile: DendenMushi, image: dendemushiImg},
    {label: "tardis", soundFile: tardis, image: tardisImg},
    {label: "Gab1", soundFile: Gab1},
    {label: "Madame est service", soundFile: Madame},
    {label: "La petite maison dans la prairie", soundFile: prairie},
    {label: "Les Charlots contre Dracula", soundFile: dracula},
    {label: "Musclor", soundFile: Musclor},
    {label: "Bloodsports Jackson", soundFile: Jackson},
    {label: "Jolie Poupée", soundFile: poupee},
];

