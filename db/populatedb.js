#! /usr/bin/env node

// DOTENV SETUP
const dotenv = require('dotenv');
dotenv.config();

const { Client } = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);

INSERT INTO usernames (username) VALUES
('QuantumLeap22'),
('CosmicWanderer77'),
('PixelNinja42'),
('ShadowStriker99'),
('ElectricEcho11'),
('CrimsonPhoenix33'),
('SilentWhisper55'),
('MysticVoyager66'),
('SolarFlare88'),
('LunarEclipse00'),
('GalacticGuardian12'),
('NebulaNavigator34'),
('CometChaser56'),
('AsteroidAce78'),
('StardustSoldier90'),
('VoidWalker21'),
('PhantomFighter43'),
('GhostlyGlider65'),
('SpectralSpecter87'),
('EtherealEntity09'),
('ZenithZephyr13'),
('NadirNomad35'),
('ApexAdventurer57'),
('SummitSeeker79'),
('ValleyVoyager91'),
('OceanOracle24'),
('RiverRoamer46'),
('LakeLurker68'),
('SeaSerpent90'),
('WaterfallWhisperer15'),
('DesertDrifter37'),
('CanyonCarver59'),
('MountainMover81'),
('ForestFairy03'),
('SkySurfer26'),
('CloudCommander48'),
('WeatherWatcher70'),
('RainbowRider92'),
('LightningLord17'),
('ThunderTitan39'),
('StormSentinel61'),
('HurricaneHero83'),
('TornadoTamer05'),
('FireFox28'),
('IceKing50'),
('EarthElemental72'),
('WindWarrior94'),
('NatureNurturer19'),
('TimeTraveler41'),
('SpaceSage63'),
('DreamDrifter85'),
('RealityRenegade07');
`;

async function main() {
  const client = new Client({
    connectionString: `postgresql://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_DB}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
}

main();
