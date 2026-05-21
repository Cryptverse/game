import { tiers as _tiers, Drawing, WEARABLES, PetalTier, MobTier, PetalConfig, MobDrop, MobConfig } from "../../lib/protocol.js";
export const tiers = structuredClone(_tiers);
export { Drawing, WEARABLES, PetalTier, MobTier, PetalConfig, MobDrop, MobConfig };

export const petalConfigs = [
    new PetalConfig("Basic", 22.5 * 1, 10, 10)
        .setDescription("A simple petal. Not too strong, not too weak."),
    new PetalConfig("Light", 22.5 * .25, 6.5, 17)
        .setMulti([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 7, 7], 0, true)
        .setSize(.75)
        .setDescription("It's very light and recharges quickly, at the cost of damage."),
    new PetalConfig("Faster", 22.5 * .65, 12, 7)
        .setSize(.75)
        .setExtraRadians(.03)
        .setDescription("This one makes your petals spin faster."),
    new PetalConfig("Heavy", 22.5 * 2, 100, 2.5)
        .setSize(1.25)
        .setDensity(3)
        .setDescription("A more chunky petal that hits harder but takes longer to recharge."),
    new PetalConfig("Stinger", 22.5 * 4.5, 1, 75)
        .setMulti([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 1, true)
        .setDescription("A fragile petal that deals lots of damage."),
    new PetalConfig("Rice", 0, .5, 5)
        .setSize(1.25)
        .setDescription("A bit weak, but recharges instantly."),
    new PetalConfig("Rock", 22.5 * 2, 50, 5.5)
        .setSize(1.3)
        .setDescription("It's a rock, not much to say about it."),
    new PetalConfig("Cactus", 22.5 * 2, 18, 6)
        .setSize(1.25)
        .setExtraHealth(35)
        .setHuddles(1)
        .setDescription("A petal that gives you extra health. Pretty magical if you ask me."),
    new PetalConfig("Leaf", 22.5 * 1, 8, 6)
        .setSize(1.2)
        .setConstantHeal(5.5)
        .setDescription("A petal that heals you over time by the power of photosynthesis."),
    new PetalConfig("Wing", 22.5 * 1.25, 10, 10)
        .setSize(1.3)
        .setWingMovement(true)
        .setDescription("It comes and it goes."),
    new PetalConfig("Bone", 22.5 * 1.5, 10, 6)
        .setSize(1.6)
        .setArmor(6)
        .setDescription("A petal that reduces incoming damage."),
    new PetalConfig("Dirt", 22.5 * 1.5, 8, 8)
        .setSize(1.3)
        .setExtraHealth(55)
        .setSpeedMultiplier(.925)
        .setExtraSize(2.5)
        .setHuddles(1)
        .setDescription("The extra soil gives your flower more mass, but it does slow you down a bit..."),
    new PetalConfig("Magnolia", 22.5 * 1.5, 8, 8)
        .setConstantHeal(3)
        .setExtraHealth(20)
        .setSize(1.5)
        .setDescription("A purely magical petal that heals you over time while simultaneously making you tougher."),
    new PetalConfig("Corn", 22.5 * 5, 425, 2)
        .setSize(1.6)
        .setDescription("It's a piece of corn. They say ants like to snack on it."),
    new PetalConfig("Sand", 22.5 * .45, 5, 8)
        .setSize(.85)
        .setMulti(4, true)
        .setDescription("Some fine grains of sand. They recharge quickly and can pack a punch."),
    new PetalConfig("Orange", 22.5 * .75, 12.5, 7.5)
        .setMulti(3, true)
        .setDescription("A bunch of oranges. They're pretty juicy."),
    new PetalConfig("Missile", 22.5 * 1, 4, 18.5)
        .setLaunchable(.7, 45)
        .setSize(1.35)
        .setDescription("You can actually shoot this one!"),
    new PetalConfig("Pea.projectile", 22.5 * 100, 3, 3)
        .setDescription("[object null object]"),
    new PetalConfig("Rose", 22.5 * 1.5, 5, 5)
        .setHealing(12.5)
        .setHuddles(1)
        .setDescription("Not great at combat, but it's healing properties are amazing."),
    new PetalConfig("Yin Yang", 22.5 * 1, 9, 11)
        .setYinYang(1)
        .setDescription("The mysterious petal of balance."),
    new PetalConfig("Pollen", 22.5 * .75, 13, 13)
        .setSize(.6)
        .setLaunchable(0, 75)
        .setMulti([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 5], false, true)
        .setDescription("It makes you sneeze. Don't drop it!"),
    new PetalConfig("Honey", 22.5 * .5, 7.5, 7.5)
        .setSize(1.1)
        .setEnemySpeedMultiplier(.45, 5)
        .setDescription("It's sticky and will slow your enemies down."),
    new PetalConfig("Iris", 22.5 * 1, 10, 5)
        .setSize(.8)
        .setPoison(12.5, 5)
        .setDescription("Packs an unexpected punch in its secret weapon: poison."),
    new PetalConfig("Web", 22.5 * 2, 7, 7)
        .setDescription("Sticky!"),
    new PetalConfig("Web.projectile", 22.5 * 100, 1E5, 0)
        .setSize(30)
        .setEnemySpeedMultiplier(.334, .05)
        .setIgnoreWalls(1)
        .setDescription("[object null object]"),
    new PetalConfig("Third Eye", 0, 0, 0)
        .setExtraRange(.5)
        .setMulti(0, false)
        .setWearable(WEARABLES.THIRD_EYE)
        .setDescription("Through the eye of the beholder comes extra range."),
    new PetalConfig("Pincer", 22.5 * 1, 7.5, 7.5)
        .setSize(1.2)
        .setPoison(2, 5)
        .setEnemySpeedMultiplier(.6, 5)
        .setDescription("Poisonous, and it slows down your enemies. A perfect double whammy."),
    new PetalConfig("Beetle Egg", 22.5 * 2, 25, 1)
        .setSize(1.5)
        .setHuddles(1)
        .setDescription("Something might pop out of this!"),
    new PetalConfig("Antennae", 0, 0, 0)
        .setExtraVision(150)
        .setMulti(0, false)
        .setWearable(WEARABLES.ANTENNAE)
        .setDescription("These feelers give you some extra vision."),
    new PetalConfig("Peas", 22.5 * 1.5, 20, 17.5)
        .setSize(1.15)
        .setDescription("A pod of peas. They'll explode if you're not careful."),
    new PetalConfig("Stick", 22.5 * 1, 25, 1)
        .setSize(1.25)
        .setHuddles(1)
        .setMulti(2, false)
        .setDescription("A bundle of sticks... I wonder what'll happen if you spin them around in the desert..."),
    new PetalConfig("Scorpion Missile.projectile", 22.5 * 100, 5, 2.5)
        .setPoison(2.5, 5)
        .setDescription("[object null object]"),
    new PetalConfig("Dahlia", 22.5 * .75, 5, 5)
        .setHealing(3)
        .setSize(.5)
        .setHuddles(1)
        .setMulti(3, true)
        .setDescription("A very consistent trickle heal."),
    new PetalConfig("Primrose", 22.5 * 1, 12.5, 7.5)
        .setSize(1.3)
        .setHuddles(1)
        .setHealSpit(22.5 * 3, 125, 10)
        .setDescription("Said to be from a mystical covenant of witches who specialized in healing nature."),
    new PetalConfig("Fire Spellbook", 22.5 * 1.25, 15, 5)
        .setSize(1.2)
        .setPentagramAbility(22.5 * 4, 150, 10, {
            damage: 5,
            duration: 5
        }, {
            multiplier: .5,
            duration: 5
        })
        .setHuddles(1)
        .setDescription("A tome of ancient spells. It's said to be able to focus the power of a fallen Demon."),
    new PetalConfig("Deity", 0, 50, 50)
        .setSize(1.15)
        .setMulti(3, true)
        .setHealSpit(10, 1000, 5)
        .setConstantHeal(1000)
        .setExtraHealth(10000)
        .setEnemySpeedMultiplier(.1, 10)
        .setDamageReduction(.2)
        .setExtraRadians(.01)
        .setExtraRange(1.05)
        .setExtraVision(5)
        .setPoison(5, 10)
        .setSpeedMultiplier(1.05)
        .setWingMovement(1)
        .setLightning([5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 32 * 16, 128)
        .setDescription("A petal that channels the power of all that came before."),
    new PetalConfig("Lightning", 22.5 * 1, 1e-15, 5)
        .setLightning([3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 9], 32 * 8, 7)
        .setDescription("Shockingly shocking!"),
    new PetalConfig("Powder", 22.5 * .75, 3, 5)
        .setSize(1.65)
        .setSpeedMultiplier(1.03)
        .setHuddles(1)
        .setDescription("This special cocaine will make you go fast!"),
    new PetalConfig("Ant Egg", 22.5 * 2.5, 25, 1)
        .setSize(1.1)
        .setMulti(4, false)
        .setHuddles(1)
        .setDescription("A petal that spawns ants. They'll help you out!"),
    new PetalConfig("Yucca", 22.5 * 1.5, 8, 6)
        .setSize(1.2)
        .setConstantHeal(7.5, true)
        .setDescription("A strange leaf that heals you but only when you're in defensive mode."),
    new PetalConfig("Magnet", 22.5 * 2, 9, 6)
        .setSize(1.55)
        .setExtraPickupRange(125)
        .setAttractsLightning(1)
        .setHuddles(1)
        .setDescription("This petal's magnetic field will attract nearby items. Does not stack."),
    new PetalConfig("Amulet", 0, 0, 0)
        .setMulti(0, false)
        .setWearable(WEARABLES.AMULET)
        .setDamageReflection(.175, .275)
        .setDescription("What an oddity! It's said to reflect a portion of incoming conventional damage. Does not stack."),
    new PetalConfig("Jelly", 23, 9, 7)
        .setDensity(20)
        .setDescription("Super bouncy! Knocks all your enemies around. Very fun to use and cause problems with."),
    new PetalConfig("Yggdrasil", 22.5 * 45, Infinity, 0)
        .setDeathDefying(.15, 2.5)
        .setHuddles(1)
        .setPhases(1)
        .setDescription("The tree of life. If you were to die with this petal alive, you'd be revived with a portion of your health."),
    new PetalConfig("Glass", 22.5 * 2, 1e-15, 2.5)
        .setPhases(1)
        .setDescription("A shard of glass that phases through enemies."),
    new PetalConfig("Dandelion", 22.5 * 1, 10, 8)
        .setMulti(2, false)
        .setSize(1.4)
        .setLaunchable(.575, 35)
        .setEnemySpeedMultiplier(.65, 6)
        .setDescription("A paralyzing force."),
    new PetalConfig("Sponge", 22.5 * 1.5, 24, 0)
        .setSize(4 / 3)
        .setHuddles(1)
        .setAbsorbsDamage(35, [
            3 * 22.5, 3 * 22.5, 3 * 22.5,
            4 * 22.5, 4 * 22.5, 4 * 22.5,
            5 * 22.5, 5 * 22.5, 5 * 22.5,
            6 * 22.5, 7 * 22.5, 8 * 22.5
        ])
        .setDescription("It absorbs conventional damage done to your flower. If incoming damage is too great, you will suffer all of the damage the sponge has contained at once."),
    new PetalConfig("Pearl", 22.5 * 2, 23, 6.5)
        .setSize(2)
        .setPlaceDown(1)
        .setDescription("A pearl that can be placed on the ground. You can call it back to you at any time."),
    new PetalConfig("Shell", 22.5 * 1.5, 13, 6)
        .setSize(1.5)
        .setShield(12.5)
        .setHuddles(1)
        .setDescription("A shell that provides extra protection through a shield."),
    new PetalConfig("Bubble", 22.5 * .5, 1e-15, 1e-15)
        .setSize(1.3)
        .setBoost(
            [5, 7, 11, 15, 20, 25, 30, 35, 40, 45, 50, 55].map(e => e * 2 | 0),
            [1, .9, .8, .7, .6, .5, .5, .4, .3, .2, .1, .1].map(e => e * 22.5 | 0)
        )
        .setDescription("It will boost you when you pop it."),
    new PetalConfig("Air", 0, 0, 0)
        .setMulti(0, false)
        .setWearable(WEARABLES.AIR)
        .setExtraSize(3)
        .setDescription("Literally nothing at all, but it puffs you up."),
    new PetalConfig("Starfish", 22.5 * 1.5, 9, 11)
        .setSize(1.4)
        .setConstantHeal(9, false, .7)
        .setDescription("A leg of a starfish. It will heal you quite effectively while you are under 70% health."),
    new PetalConfig("Fang", 22.5 * 1.25, 8, 10)
        .setSize(1.15)
        .setHealBack([.2, .25, .3, .35, .4, .45, -.5, .55, .6, .65, .7, .75])
        .setDescription("The fang of a dangerous Leech. It will heal back the damage it causes."),
    new PetalConfig("Goo", 22.5 * 1.75, 10, 10)
        .setSize(1.3)
        .setPoison(2, 5)
        .setEnemySpeedMultiplier(.7, 5)
        .setLaunchable(1, 35)
        .setDescription("This sticky goo isn't good for you..."),
    new PetalConfig("Maggot Poo", 22.5 * 1, 5, 5.5)
        .setSize(1.3)
        .setDamageReflection(.05)
        .setLaunchable(0, 75)
        .setDescription("A steaming pile of shi- I mean, poo."),
    new PetalConfig("Lightbulb", 22.5 * 1, 10, 10)
        .setSize(1.4)
        .setAttractsAggro(1)
        .setHuddles(1)
        .setLighting(1)
        .setDescription("Mobs will prioritize your shiny bulb when in use. The priority increases with each rarity, and stacks with itself."),
    new PetalConfig("Battery", 22.5 * 2.25, 1e-15, 0)
        .setPhases(1)
        .setSize(1.34)
        .setLightning(4, 32 * 8, 5, [2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7], true)
        .setDescription("A battery that can release electric charges when its parent is hit."),
    new PetalConfig("Dust", 22.5 * .75, 6, 7.5)
        .setMulti(3, true)
        .setLaunchable(.7, 55)
        .setDensity(1.5)
        .setDescription("A cloud of dust that can be launched at enemies."),
    new PetalConfig("Armor", 0, 0, 0)
        .setMulti(0, false)
        .setWearable(WEARABLES.ARMOR)
        .setExtraHealth(-10)
        .setDamageReduction(.25)
        .setDescription("This petal greatly protects you, but at a cost..."),
    new PetalConfig("Wasp Missile.projectile", 22.5 * 100, 4, 4)
        .setPoison(2, 8)
        .setDescription("[object null object]"),
    new PetalConfig("Shrub", 22.5 * 1.5, 15, 6)
        .setSize(1.2)
        .setExtraHealth(15)
        .setPoison(3, 2)
        .setDescription("Extra HP with a bonus: poison!"),
    new PetalConfig("projectile.grape", 22.5 * 100, 1, 4)
        .setPoison(.75, 6)
        .setDescription("[object null object]"),
    new PetalConfig("Grapes", 22.5 * 1.5, 15, 10)
        .setSize(1.15)
        .setPoison(7.5, 5)
        .setDescription("With an added bonus: Poison!"),
    new PetalConfig("Lantern", 22.5 * 2, 5, 5)
        .setHuddles(1)
        .setDescription("This fragile lantern shines so bright...")
        .setLighting(3),
    new PetalConfig("web.player.launched", 22.5 * 100, 1e5, 0)
        .setSize(30)
        .setEnemySpeedMultiplier(.334, .05)
        .setIgnoreWalls(1)
        .setDescription("[object null object]"),
    new PetalConfig("Branch", 22.5 * 3, 10, 10)
        .setSize(1.5)
        .setHuddles(1)
        .setMulti(2, false)
        .setDescription("A fragile branch from the Wilt."),
    new PetalConfig("Leech Egg", 22.5 * 2, 25, 1)
        .setSize(1.5)
        .setHuddles(1)
        .setDescription("Summons leeches to help protect you!"),
    new PetalConfig("Hornet Egg", 22.5 * 2, 25, 1)
        .setSize(1.5)
        .setMulti(2, false)
        .setHuddles(1)
        .setDescription("Hey wait a minute... This isn't a Beetle Egg!"),
    new PetalConfig("Candy", 22.5 * 1, 5, 5)
        .setSize(.9)
        .setMulti(5, true)
        .setDescription("Ooh, tasty!"),
    new PetalConfig("Claw", 22.5 * 2, .25, 8)
        .setExtraDamage(.75, 1, 7.5)
        .setDescription("Sharp against the strong, weak against the weak."),
    new PetalConfig("Bullet.projectile", 1000, 12, 2)
        .setDescription("[object null object]"),
    new PetalConfig("Square Egg", 22.5 * 2, 50, 1)
        .setSize(1.2)
        .setHuddles(1)
        .setDescription("This isn't from this world..."),
    new PetalConfig("Triangle Egg", 22.5 * 3, 100, 2)
        .setSize(1.5)
        .setHuddles(1)
        .setDescription("This isn't from this world..."),
    new PetalConfig("Pentagon Egg", 22.5 * 4, 200, 4)
        .setSize(1.8)
        .setHuddles(1)
        .setDescription("This isn't from this world...")
];

export const petalIDOf = name => petalConfigs.findIndex(p => p.name === name);

// ADDITION
let newPetals1 = [
    new PetalConfig("Bullet Particle").setDescription("[object null object]"),
];
petalConfigs.push(...newPetals1);

newPetals1 = [
    new PetalConfig("Small Bullet", 0, 12, 0).setProjectile().setSize(0.5).setDescription("[object null object]"),
    new PetalConfig("Medium Bullet", 0, 18, 0).setProjectile().setSize(0.75).setDescription("[object null object]"),
    new PetalConfig("Large Bullet", 0, 40, 0).setProjectile().setDensity(2).setSize(1).setDescription("[object null object]"),
    new PetalConfig("Shotgun Pellet", 0, 8, 0).setProjectile().setSize(0.5).setDescription("[object null object]"),
    new PetalConfig("Standard Rocket", 0, 20, 0).setProjectile(2000, false, 0, 3, null).setExplodes(petalIDOf("Shrapnel"), 3/20).setSize(1.5).setDescription("[object null object]"),
    new PetalConfig("Seeking Rocket", 0, 20, 0).setProjectile(2000, true, 2, 1, null).setExplodes(petalIDOf("Shrapnel"), 3/20).setSize(1.5).setDescription("[object null object]"),
    new PetalConfig("Shrapnel", 0, 18, 0).setProjectile(50, false, 0, 0, 0.96).setDensity(3).setSize(1).setDescription("[object null object]"),
];
petalConfigs.push(...newPetals1);

newPetals1 = [
    new PetalConfig("Pistol", 18, 12, 2.5).setShooter(petalIDOf("Small Bullet"), 4, 20, 0.1).setSize(1).setDescription("A basic firearm."),
    new PetalConfig("SMG", 60, 25, 2.5).setShooter(petalIDOf("Small Bullet"), 2, 20, 0.2).setSize(2).setDrawing(
        new Drawing().addAction("beginPath").addAction("moveTo",0.7051499842386693,1.2688499716389925).addAction("bezierCurveTo",0.6596999852545559,1.3133999706432224,0.5864999868907034,1.3115999706834554,0.5434499878529458,1.2646499717328699).addAction("bezierCurveTo",0.5434499878529458,1.2646499717328699,0.5393999879434704,1.2634499717596919,0.5003999888151884,1.2178499727789311).addAction("bezierCurveTo",0.12749999715015292,0.7816499825287611,-0.09749999782070518,0.21494999519549307,-0.09749999782070518,-0.4049999909475446).addAction("lineTo",0.5267999882251024,-0.4049999909475446).addAction("bezierCurveTo",0.5267999882251024,0.04784999893046917,0.6869999846443533,0.4628999896533787,0.9536999786831438,0.7864499824214728).addAction("bezierCurveTo",0.9896999778784812,0.8302499814424665,0.9952499777544289,0.8324999813921751,0.9952499777544289,0.8324999813921751).addAction("bezierCurveTo",1.0355999768525361,0.8771999803930521,1.033649976896122,0.9458999788574876,0.9905999778583645,0.9880499779153616).addAction("lineTo",0.7051499842386693,1.2688499716389925).addAction("fill","#2d3233").addAction("stroke","#3a3e42",0.15,0).addAction("closePath").addAction("beginPath").addAction("moveTo",0.67739998485893,1.0403999767452479).addAction("bezierCurveTo",0.4510499899182468,0.7706999827735125,0.2867999935895204,0.44669999001547694,0.20684999537654214,0.09074999797157939).addAction("stroke","#3a3e42",0.15,0).addAction("closePath").addAction("beginPath").addAction("moveTo",-0.17009999619796873,-0.07499999832361937).addAction("lineTo",-0.2308499948401004,0.14264999681152404).addAction("bezierCurveTo",-0.24434999453835188,0.19139999572187663,-0.28874999354593456,0.2249999949708581,-0.33914999241940674,0.2249999949708581).addAction("lineTo",-0.6899999845772982,0.2249999949708581).addAction("stroke","#2d3233",0.15,0).addAction("closePath").addAction("beginPath").addAction("moveTo",-2.0021999552473426,-0.7447499833535403).addAction("bezierCurveTo",-1.9937999554350971,-0.7994999821297823,-1.9465499564912168,-0.8399999812245369,-1.8910499577317386,-0.8399999812245369).addAction("lineTo",-0.9224999793805182,-0.8399999812245369).addAction("lineTo",-0.9224999793805182,-0.47474998938851054).addAction("lineTo",-1.5391499655973166,-0.47474998938851054).addAction("bezierCurveTo",-1.5866999645344912,-0.47474998938851054,-1.6291499635856599,-0.44489999005571007,-1.645049963230267,-0.40004999105818567).addAction("lineTo",-1.8136499594617634,0.07424999834038322).addAction("bezierCurveTo",-1.830899959076196,0.12314999724738304,-1.8794999579899012,0.15374999656341976,-1.9310999568365517,0.14849999668076638).addAction("lineTo",-2.0195999548584225,0.13949999688193207).addAction("bezierCurveTo",-2.0836499534267934,0.1330499970261008,-2.129249952407554,0.07409999834373597,-2.1193499526288364,0.010349999768659518).addAction("lineTo",-2.0021999552473426,-0.7447499833535403).addAction("fill","#2d3233").addAction("stroke","#2d3233",0.15,0).addAction("closePath").addAction("beginPath").addAction("moveTo",-1.3279499703180044,-0.3911999912559986).addAction("bezierCurveTo",-1.3904999689199031,-0.39059999126940964,-1.4416499677766115,-0.44114999013952905,-1.4416499677766115,-0.5036999887414276).addAction("lineTo",-1.4416499677766115,-0.8467499810736627).addAction("bezierCurveTo",-1.4416499677766115,-0.885899980198592,-1.4213999682292342,-0.9221999793872238,-1.3880999689735474,-0.9425999789312483).addAction("lineTo",-1.0787999758869409,-1.132949974676594).addAction("bezierCurveTo",-1.0609499762859196,-1.1437499744351953,-1.040549976741895,-1.1495999743044376,-1.0198499772045762,-1.1495999743044376).addAction("lineTo",1.4126999684236943,-1.1495999743044376).addAction("lineTo",1.4126999684236943,-1.1939999733120201).addAction("bezierCurveTo",1.4126999684236943,-1.2563999719172714,1.463399967290461,-1.3067999707907436,1.5257999658957124,-1.3064999707974492).addAction("lineTo",1.5406499655637889,-1.3064999707974492).addAction("bezierCurveTo",1.6025999641790984,-1.306199970804155,1.6526999630592762,-1.2559499719273297,1.6526999630592762,-1.1939999733120201).addAction("lineTo",1.6526999630592762,-0.8941499800141901).addAction("lineTo",1.8506999586336315,-0.8941499800141901).addAction("lineTo",1.8506999586336315,-0.584999986924231).addAction("lineTo",1.6522499630693346,-0.584999986924231).addAction("bezierCurveTo",1.6522499630693346,-0.5557499875780194,1.6285499635990708,-0.5318999881111085,1.599149964256212,-0.5318999881111085).addAction("lineTo",0.6937499844934789,-0.5318999881111085).addAction("lineTo",0.6937499844934789,-0.4120499907899648).addAction("lineTo",-1.3279499703180044,-0.3911999912559986).addAction("fill","#3a3e42").addAction("stroke","#2d3233",0.15,0).addAction("closePath").addAction("beginPath").addAction("moveTo",0.6643499851506204,-0.6119999863207339).addAction("bezierCurveTo",0.6640499851573258,-0.6743999849259853,0.714449984030798,-0.7249499837961048,0.7768499826360494,-0.7249499837961048).addAction("lineTo",1.4260499681252985,-0.7249499837961048).addAction("bezierCurveTo",1.4881499667372553,-0.7249499837961048,1.5385499656107275,-0.6746999849192797,1.5385499656107275,-0.6124499863106757).addAction("lineTo",1.5385499656107275,-0.5764499871153385).addAction("bezierCurveTo",1.5385499656107275,-0.5185499884095043,1.494749966589734,-0.4700999894924462,1.4371499678771942,-0.46439998961985113).addAction("lineTo",0.7888499823678283,-0.3659999918192625).addAction("bezierCurveTo",0.7228499838430433,-0.3595499919634313,0.6655499851237981,-0.4111499908100814,0.6652499851305036,-0.4775999893248082).addAction("lineTo",0.6643499851506204,-0.6119999863207339).addAction("fill","#2d3233").addAction("stroke","#2d3233",0.15,0).addAction("closePath").addAction("beginPath").addAction("moveTo",-1.3939499688427897,0.6836999847181141).addAction("bezierCurveTo",-1.4515499675553294,0.6544499853719025,-1.4728499670792372,0.5828999869711697,-1.440599967800081,0.5270999882183969).addAction("lineTo",-1.1027999753504993,-0.05789999870583414).addAction("bezierCurveTo",-1.080149975856766,-0.09704999783076344,-1.083149975789711,-0.14579999674111602,-1.1102999751828613,-0.18179999593645332).addAction("lineTo",-1.213199972882867,-0.318599992878735).addAction("bezierCurveTo",-1.2280499725509435,-0.3382499924395233,-1.2359999723732473,-0.3623999918997287,-1.2358499723766,-0.3869999913498759).addAction("lineTo",-1.2355499723833057,-0.43214999034069473).addAction("bezierCurveTo",-1.2352499723900112,-0.47804998931474973,-1.1978999732248488,-0.515249988483265,-1.1518499742541466,-0.515249988483265).addAction("lineTo",0.4315499903541056,-0.515249988483265).addAction("bezierCurveTo",0.4859999891370533,-0.515249988483265,0.5326499880943445,-0.47624998935498286,0.5422499878797677,-0.42269999055191865).addAction("lineTo",0.5606999874673781,-0.3202499928418546).addAction("bezierCurveTo",0.5705999872460958,-0.2654999940656125,0.5389499879535284,-0.211799995265901,0.48629998913034767,-0.19379999566823236).addAction("lineTo",-0.041999999061227124,-0.013499999698251412).addAction("quadraticCurveTo",-0.05954999866895405,-0.007499999832361862,-0.0782999982498589,-0.007499999832361862).addAction("lineTo",-0.41204999078996507,-0.007499999832361862).addAction("bezierCurveTo",-0.4576499897707257,-0.007499999832361862,-0.4987499888520691,0.02009999955073007,-0.5161499884631487,0.062399998605251396).addAction("lineTo",-0.8312999814189973,0.8321999813988805).addAction("bezierCurveTo",-0.8561999808624389,0.8929499800410122,-0.9275999792665246,0.9196499794442207,-0.9862499779555949,0.8899499801080675).addAction("lineTo",-1.3939499688427897,0.6836999847181141).addAction("fill","#2d3233").addAction("stroke","#2d3233",0.15,0).addAction("closePath").addAction("beginPath").addAction("moveTo",1.6724999626167119,-0.8174999817274511).addAction("bezierCurveTo",1.6724999626167119,-0.8795999803394079,1.722899961490184,-0.9299999792128801,1.784999960102141,-0.9299999792128801).addAction("lineTo",2.00939995508641,-0.9299999792128801).addAction("bezierCurveTo",2.0714999536983667,-0.9299999792128801,2.121899952571839,-0.8795999803394079,2.121899952571839,-0.8174999817274511).addAction("lineTo",2.121899952571839,-0.6670499850902706).addAction("bezierCurveTo",2.121899952571839,-0.6049499864783138,2.0714999536983667,-0.5545499876048415,2.00939995508641,-0.5545499876048415).addAction("lineTo",1.784999960102141,-0.5545499876048415).addAction("bezierCurveTo",1.722899961490184,-0.5545499876048415,1.6724999626167119,-0.6049499864783138,1.6724999626167119,-0.6670499850902706).addAction("lineTo",1.6724999626167119,-0.8174999817274511).addAction("fill","#2d3233").addAction("stroke","#2d3233",0.075,0).addAction("closePath").addAction("beginPath").addAction("moveTo",-0.944999978877604,-0.9374999790452421).addAction("lineTo",1.304999970830977,-0.9374999790452421).addAction("stroke","#2d3233",0.15,0).addAction("closePath")
    ).setDescription("A high-firerate firearm."),
    new PetalConfig("Assault Rifle", 68, 20, 4).setShooter(petalIDOf("Medium Bullet"), 4, 30, 0.05).setSize(3).setDrawing(
        new Drawing().addAction("beginPath").addAction("moveTo",0.41679999068379403,0.8317999814078213).addAction("bezierCurveTo",0.3854999913834035,0.8746999804489316,0.3261999927088618,0.8856999802030624,0.28169999370351434,0.8567999808490278).addAction("bezierCurveTo",0.28169999370351434,0.8567999808490278,0.2834999936632812,0.8608999807573855,0.24689999448135497,0.8342999813519419).addAction("bezierCurveTo",-0.07859999824315306,0.5987999866157772,-0.2899999935179948,0.21569999517872937,-0.2899999935179948,-0.21749999513849616).addAction("lineTo",0.2949999934062362,-0.21859999511390923).addAction("bezierCurveTo",0.2949999934062362,0.0274999993853271,0.41909999063238507,0.2442999945394695,0.6082999864034354,0.3724999916739762).addAction("bezierCurveTo",0.6403999856859445,0.3942999911867082,0.6120999863184988,0.37469999162480233,0.6120999863184988,0.37469999162480233).addAction("bezierCurveTo",0.664299985151738,0.4040999909676611,0.6790999848209321,0.4723999894410371,0.6437999856099486,0.520699988361448).addAction("lineTo",0.41679999068379403,0.8317999814078213).addAction("fill","#3a3e42").addAction("stroke","#2d3233",0.1,0).addAction("closePath").addAction("beginPath").addAction("moveTo",0.3574999920092523,0.6733999849483371).addAction("bezierCurveTo",0.11819999735802413,0.49859998885542156,-0.047799998931586755,0.22969999486580497,-0.08639999806880952,-0.07919999822974207).addAction("stroke","#2d3233",0.1,0).addAction("closePath").addAction("beginPath").addAction("moveTo",0.4976999888755381,0.5333999880775809).addAction("bezierCurveTo",0.2961999933794141,0.39639999113976954,0.15289999658241873,0.18039999596774584,0.11189999749884014,-0.07029999842867249).addAction("stroke","#2d3233",0.1,0).addAction("closePath").addAction("beginPath").addAction("moveTo",-0.6399999856948853,-0.2799999937415123).addAction("lineTo",-0.6399999856948853,-0.11999999731779099).addAction("bezierCurveTo",-0.6399999856948853,-0.09239999793469907,-0.6218999860994517,-0.06999999843537807,-0.5996999865956605,-0.06999999843537807).addAction("lineTo",-0.4865999891236424,-0.06999999843537807).addAction("bezierCurveTo",-0.4331999903172254,-0.06999999843537807,-0.38979999128729104,-0.12369999723508955,-0.38979999128729104,-0.18999999575316906).addAction("lineTo",-0.38979999128729104,-0.25999999418854713).addAction("stroke","#2d3233",0.1,0).addAction("closePath").addAction("beginPath").addAction("moveTo",-2.1407999521493912,-0.3945999911800027).addAction("bezierCurveTo",-2.1440999520756305,-0.4458999900333584,-2.1079999528825284,-0.4912999890185893,-2.057299954015762,-0.4996999888308346).addAction("lineTo",-1.1886999734304846,-0.6433999856188893).addAction("lineTo",-0.49999998882412927,-0.6099999863654375).addAction("lineTo",-0.8615999807417394,0.46299998965114353).addAction("bezierCurveTo",-0.8792999803461136,0.5155999884754419,-0.9364999790675939,0.543699987847358,-0.9889999778941274,0.5254999882541597).addAction("lineTo",-1.2672999716736377,0.42929999040439726).addAction("bezierCurveTo",-1.3206999704800546,0.41089999081566925,-1.3481999698653817,0.351899992134422,-1.327999970316887,0.299099993314594).addAction("lineTo",-1.1094999752007426,-0.27359999388456346).addAction("lineTo",-1.9607999561727047,0.18879999577999115).addAction("bezierCurveTo",-2.024899954739958,0.22369999499991533,-2.103599952980876,0.18029999596998092,-2.108299952875823,0.10739999759942291).addAction("lineTo",-2.1407999521493912,-0.3945999911800027).addAction("fill","#9f582d").addAction("stroke","#854825",0.1,0).addAction("closePath").addAction("beginPath").addAction("moveTo",0.6695999850332737,-0.5599999874830246).addAction("lineTo",0.6707999850064515,-0.8063999819755554).addAction("lineTo",-0.9460999788530171,-0.8039999820291996).addAction("bezierCurveTo",-0.9675999783724547,-0.8039999820291996,-0.9883999779075384,-0.7970999821834267,-1.0055999775230884,-0.784299982469529).addAction("lineTo",-1.1703999738395214,-0.661999985203147).addAction("bezierCurveTo",-1.195999973267317,-0.64299998562783,-1.2109999729320409,-0.6129999862983824,-1.210799972936511,-0.5810999870114029).addAction("lineTo",-1.2092999729700387,-0.32109999282285573).addAction("bezierCurveTo",-1.2089999729767442,-0.26559999406337736,-1.1634999739937486,-0.22099999506026508,-1.1079999752342702,-0.22169999504461887).addAction("lineTo",0.4364999902434645,-0.24189999459311368).addAction("lineTo",0.4364999902434645,-0.38779999133199455).addAction("lineTo",2.0458999542705714,-0.38329999143257737).addAction("bezierCurveTo",2.0951999531686303,-0.38319999143481254,2.134999952279031,-0.4233999905362725,2.134399952292442,-0.4726999894343316).addAction("bezierCurveTo",2.1336999523080884,-0.5221999883279205,2.092999953217804,-0.5617999874427914,2.0434999543242154,-0.5609999874606728).addAction("lineTo",1.9801999557390804,-0.5599999874830245).addAction("lineTo",1.978199955783784,-0.7846999824605883).addAction("bezierCurveTo",1.9776999557949597,-0.8395999812334776,1.9330999567918477,-0.8837999802455305,1.8781999580189581,-0.8837999802455305).addAction("lineTo",1.8436999587900935,-0.8837999802455305).addAction("bezierCurveTo",1.7966999598406255,-0.8837999802455305,1.7559999607503411,-0.8510999809764326,1.7459999609738586,-0.8050999820046126).addAction("lineTo",1.6924999621696768,-0.5599999874830245).addAction("lineTo",0.6695999850332737,-0.5599999874830246).addAction("fill","#3a3e42").addAction("stroke","#2d3233",0.1,0).addAction("closePath").addAction("beginPath").addAction("moveTo",1.5674999649636447,-0.5599999874830246).addAction("lineTo",1.411699968446046,-0.7594999830238521).addAction("lineTo",0.6081999864056705,-0.7605999829992652).addAction("lineTo",0.6088999863900244,-0.6241999860480428).addAction("lineTo",1.3242999703995884,-0.6244999860413373).addAction("lineTo",1.3242999703995884,-0.5575999875366688).addAction("lineTo",1.5674999649636447,-0.5599999874830246).addAction("fill","#3a3e42").addAction("stroke","#2d3233",0.1,0).addAction("closePath").addAction("beginPath").addAction("moveTo",1.0756999759562313,-0.5609999874606729).addAction("lineTo",0.4469999900087714,-0.5609999874606729).addAction("bezierCurveTo",0.3917999912425875,-0.5609999874606729,0.34699999224394557,-0.516199988462031,0.34699999224394557,-0.46099998969584705).addAction("lineTo",0.34699999224394557,-0.3256999927200377).addAction("bezierCurveTo",0.34699999224394557,-0.26449999408796426,0.40149999102577566,-0.2176999951340258,0.46199998967349526,-0.22689999492838978).addAction("lineTo",0.9912999778427183,-0.30709999313578007).addAction("bezierCurveTo",1.040199976749718,-0.3144999929703772,1.0762999759428202,-0.35649999203160404,1.0762999759428202,-0.4059999909251928).addAction("lineTo",1.0762999759428202,-0.7102999841235578).addAction("bezierCurveTo",1.0762999759428202,-0.7654999828897416,1.031599976941943,-0.8102999818883836,0.9762999781779944,-0.8102999818883836).addAction("lineTo",0.6302999859116971,-0.8102999818883836).addAction("bezierCurveTo",0.5750999871455132,-0.8102999818883836,0.5302999881468713,-0.7654999828897416,0.5302999881468713,-0.7102999841235578).addAction("lineTo",0.5302999881468713,-0.5596999874897302).addAction("fill","#9f582d").addAction("stroke","#854825",0.1,0).addAction("closePath").addAction("beginPath").addAction("moveTo",0.9049999797716737,-0.5999999865889549).addAction("bezierCurveTo",0.9242999793402852,-0.5999999865889549,0.9399999789893627,-0.5842999869398773,0.9399999789893627,-0.5649999873712659).addAction("bezierCurveTo",0.9399999789893627,-0.5456999878026545,0.9242999793402852,-0.5299999881535769,0.9049999797716737,-0.5299999881535769).addAction("lineTo",0.7058999842219055,-0.5299999881535769).addAction("bezierCurveTo",0.6865999846532941,-0.5299999881535769,0.6708999850042164,-0.5456999878026545,0.6708999850042164,-0.5649999873712659).addAction("bezierCurveTo",0.6708999850042164,-0.5842999869398773,0.6865999846532941,-0.5999999865889549,0.7058999842219055,-0.5999999865889549).addAction("lineTo",0.9049999797716737,-0.5999999865889549).addAction("stroke","#854825",0.1,0).addAction("closePath").addAction("beginPath").addAction("moveTo",-0.9299999792128801,-0.5799999870359898).addAction("lineTo",0.2603999941796065,-0.5799999870359898).addAction("stroke","#2d3233",0.1,0).addAction("closePath")
    ).setDescription("A well-rounded firearm."),
    new PetalConfig("Shotgun", 68, 6, 2).setShooter(petalIDOf("Shotgun Pellet"), 10, 20, 0.2, 10).setSize(1).setDescription("A high-damage firearm, at the cost of low range."),
    new PetalConfig("Sniper Rifle", 90, 3, 17.5).setShooter(petalIDOf("Large Bullet"), 25, 40).setSize(3.5).setDrawing(
        new Drawing().addAction("beginPath").addAction("moveTo",-0.5754400273319334,0.4502400213852525).addAction("bezierCurveTo",-0.5752800273243339,0.5223200248088689,-0.5120800243224949,0.5780800274573267,-0.4405600209254772,0.5691200270317495).addAction("lineTo",-0.056320002675056505,0.5211200247518718).addAction("bezierCurveTo",0.003760000178590365,0.513600024394691,0.048800002317875575,0.46256002197042106,0.048800002317875575,0.4020000190939754).addAction("lineTo",0.048800002317875575,0.18048000857234).addAction("lineTo",-0.5757600273471326,0.18048000857234).addAction("lineTo",-0.5754400273319334,0.4502400213852525).addAction("fill","#3a3e42").addAction("stroke","#2d3233",0.08,0).addAction("closePath").addAction("beginPath").addAction("moveTo",-0.20800000987946987,0.29896001419983803).addAction("lineTo",-0.20800000987946987,0.3998400189913809).addAction("stroke","#2d3233",0.08,0).addAction("closePath").addAction("beginPath").addAction("moveTo",-0.42400002013891935,0.3309600157197565).addAction("lineTo",-0.42400002013891935,0.4318400205112993).addAction("stroke","#2d3233",0.08,0).addAction("closePath").addAction("beginPath").addAction("moveTo",-1.0592000503093004,0.23320001107640564).addAction("lineTo",-1.0153600482270122,0.352320016734302).addAction("bezierCurveTo",-0.9979200473986566,0.39944001897238196,-0.953040045266971,0.430800020461902,-0.9027200428768992,0.430800020461902).addAction("lineTo",-0.7970400378573685,0.430800020461902).addAction("bezierCurveTo",-0.750560035649687,0.430800020461902,-0.7083200336433947,0.4040000191889703,-0.6884800327010453,0.3620800171978772).addAction("lineTo",-0.6276000298094004,0.2332000110764057).addAction("stroke","#2d3233",0.08,0).addAction("closePath").addAction("beginPath").addAction("moveTo",0.9375200445298105,-0.12840000609867275).addAction("bezierCurveTo",0.9383200445678085,-0.1952000092715025,0.8844000420067459,-0.24984001186676325,0.8176000388339162,-0.24984001186676325).addAction("lineTo",-1.8656000886112452,-0.24984001186676325).addAction("bezierCurveTo",-1.931920091761276,-0.24984001186676325,-1.9856000943109393,-0.19608000931330027,-1.9856000943109393,-0.1298400061670691).addAction("lineTo",-1.9856000943109393,0.5297600251622498).addAction("bezierCurveTo",-1.9856000943109393,0.5960800283122807,-1.931920091761276,0.649760030861944,-1.8656000886112452,0.649760030861944).addAction("lineTo",-1.809120085928589,0.649760030861944).addAction("bezierCurveTo",-1.7642400837969032,0.649760030861944,-1.7230400818400085,0.6247200296726078,-1.7024800808634606,0.5848000277765095).addAction("lineTo",-1.6864800801035014,0.5537600263021887).addAction("bezierCurveTo",-1.663920079031959,0.5100800242275,-1.603040076140314,0.5058400240261107,-1.5747200747951864,0.5460800259374082).addAction("lineTo",-1.4550400691106913,0.715680033992976).addAction("lineTo",-1.3995200664736327,0.5091200241819025).addAction("lineTo",-1.4863200705964115,0.5095200242009015).addAction("bezierCurveTo",-1.5544800738338378,0.5122400243300944,-1.6112000765278933,0.45776002174243335,-1.6112000765278933,0.38960001850500703).addAction("lineTo",-1.6112000765278933,0.3100000147242099).addAction("bezierCurveTo",-1.6112000765278933,0.24376001157797872,-1.5574400739744303,0.19000000902451575,-1.4912000708281992,0.19000000902451575).addAction("lineTo",-1.332400063285604,0.19000000902451575).addAction("lineTo",-1.4560000691562889,0.715280033973977).addAction("lineTo",-1.2064800573047247,0.7766400368884205).addAction("bezierCurveTo",-1.1423200542572882,0.7924800376407802,-1.0774400511756537,0.7534400357864797,-1.0613600504118945,0.6892800327390433).addAction("lineTo",-0.9805600465741006,0.3668000174220651).addAction("bezierCurveTo",-0.9650400458369401,0.30472001447342334,-0.903520042914897,0.2657600126229226,-0.8408000399358568,0.2782400132156908).addAction("lineTo",-0.6600800313521173,0.3141600149217993).addAction("bezierCurveTo",-0.6455200306605545,0.3170400150585919,-0.6304800299461928,0.31720001506619155,-0.6158400292508301,0.3145600149407982).addAction("lineTo",0.1160000055097047,0.18512000879272814).addAction("quadraticCurveTo",0.12640000600367818,0.18336000870913263,0.13696000650525128,0.18336000870913263).addAction("lineTo",0.8152800387237226,0.18336000870913263).addAction("bezierCurveTo",0.8809600418433552,0.18336000870913263,0.9344800443854188,0.1304800061974674,0.9352800444234167,0.064720003074035).addAction("lineTo",0.9375200445298105,-0.12840000609867275).addAction("fill","#408427").addAction("closePath").addAction("beginPath").addAction("moveTo",-1.3995200664736331,0.48512002304196356).addAction("lineTo",-1.4815200703684241,0.48552002306096254).addAction("bezierCurveTo",-1.5496800736058505,0.48824002319015564,-1.6064000762999058,0.43376002060249447,-1.6064000762999058,0.36560001736506814).addAction("lineTo",-1.6064000762999058,0.2860000135842711).addAction("bezierCurveTo",-1.6064000762999058,0.2197600104380399,-1.5527200737502427,0.16600000788457692,-1.4864000706002116,0.16600000788457692).addAction("lineTo",-1.3324000632856041,0.16600000788457692).addAction("lineTo",-1.3995200664736331,0.48512002304196356).addAction("stroke","#356b1f",0.08,0).addAction("closePath").addAction("beginPath").addAction("moveTo",0.9375200445298105,-0.12840000609867275).addAction("bezierCurveTo",0.9383200445678085,-0.1952000092715025,0.8844000420067459,-0.24984001186676325,0.8176000388339162,-0.24984001186676325).addAction("lineTo",-1.8656000886112452,-0.24984001186676325).addAction("bezierCurveTo",-1.931920091761276,-0.24984001186676325,-1.9856000943109393,-0.19608000931330027,-1.9856000943109393,-0.1298400061670691).addAction("lineTo",-1.9856000943109393,0.5297600251622498).addAction("bezierCurveTo",-1.9856000943109393,0.5960800283122807,-1.931920091761276,0.649760030861944,-1.8656000886112452,0.649760030861944).addAction("lineTo",-1.809120085928589,0.649760030861944).addAction("bezierCurveTo",-1.7642400837969032,0.649760030861944,-1.7230400818400085,0.6457600306719542,-1.7024800808634606,0.605840028775856).addAction("lineTo",-1.6864800801035014,0.5748000273015351).addAction("bezierCurveTo",-1.663920079031959,0.5311200252268464,-1.603040076140314,0.5268800250254573,-1.5747200747951864,0.5671200269367547).addAction("lineTo",-1.4550400691106913,0.715680033992976).addAction("lineTo",-1.4560000691562889,0.7152800339739771).addAction("lineTo",-1.2064800573047247,0.7766400368884206).addAction("bezierCurveTo",-1.1423200542572882,0.7924800376407803,-1.0774400511756537,0.7534400357864798,-1.0613600504118945,0.6892800327390434).addAction("lineTo",-0.9805600465741006,0.3668000174220652).addAction("bezierCurveTo",-0.9650400458369401,0.30472001447342345,-0.903520042914897,0.2657600126229227,-0.8408000399358568,0.2782400132156909).addAction("lineTo",-0.6600800313521173,0.3141600149217994).addAction("bezierCurveTo",-0.6455200306605545,0.31704001505859203,-0.6304800299461928,0.31720001506619167,-0.6158400292508301,0.3145600149407983).addAction("lineTo",0.1160000055097047,0.18512000879272825).addAction("quadraticCurveTo",0.12640000600367818,0.18336000870913274,0.13696000650525128,0.18336000870913274).addAction("lineTo",0.8152800387237226,0.18336000870913274).addAction("bezierCurveTo",0.8809600418433552,0.18336000870913274,0.9344800443854188,0.13048000619746752,0.9352800444234167,0.06472000307403512).addAction("lineTo",0.9375200445298105,-0.12840000609867275).addAction("stroke","#356b1f",0.08,0).addAction("closePath").addAction("beginPath").addAction("moveTo",0.7480800355318934,0.01600000075995922).addAction("lineTo",-0.7202400342095642,0.01600000075995922).addAction("stroke","#356b1f",0.08,0).addAction("closePath").addAction("beginPath").addAction("moveTo",-2.3209601102396844,-0.17232000818476081).addAction("bezierCurveTo",-2.3208801102358847,-0.24312001154758037,-2.2598401073366405,-0.29840001417323947,-2.1893601039890203,-0.2916000138502568).addAction("lineTo",-2.002640095120296,-0.2735200129915029).addAction("bezierCurveTo",-1.9411200921982528,-0.2675200127065182,-1.8942400899715721,-0.21584001025184993,-1.8942400899715721,-0.15408000731840735).addAction("lineTo",-1.8942400899715721,0.5498400261159986).addAction("bezierCurveTo",-1.8942400899715721,0.6064000288024544,-1.9336800918448718,0.6552800311241299,-1.9890400944743305,0.6671200316864996).addAction("lineTo",-2.1770401034038516,0.7075200336053966).addAction("bezierCurveTo",-2.251840106956661,0.7236000343691557,-2.322320110304281,0.6664800316561013,-2.322240110300481,0.5900000280234962).addAction("lineTo",-2.3209601102396844,-0.17232000818476081).addAction("fill","#3a3e42").addAction("stroke","#2d3233",0.08,0).addAction("closePath").addAction("beginPath").addAction("moveTo",-2.1840001037344337,-0.13600000645965338).addAction("lineTo",-2.1840001037344337,0.5600800266023725).addAction("stroke","#2d3233",0.08,0).addAction("closePath").addAction("beginPath").addAction("moveTo",-1.2364000587258488,-0.2156000102404505).addAction("bezierCurveTo",-1.2364000587258488,-0.2692000127863139,-1.2798400607891383,-0.312720014853403,-1.3335200633388014,-0.312720014853403).addAction("lineTo",-1.7984000854194164,-0.312720014853403).addAction("bezierCurveTo",-1.8522400879766792,-0.312720014853403,-1.8960000900551677,-0.2690400127787143,-1.8960000900551677,-0.21512001021765176).addAction("lineTo",-1.8960800900589674,-0.11232000533491376).addAction("lineTo",-1.2365600587334484,-0.10928000519052151).addAction("lineTo",-1.2364000587258488,-0.2156000102404505).addAction("fill","#3a3e42").addAction("stroke","#2d3233",0.08,0).addAction("closePath").addAction("beginPath").addAction("moveTo",-1.069600050803274,-0.2282400108408183).addAction("bezierCurveTo",-1.069600050803274,-0.2900000137742609,-1.0195200484246014,-0.34008001615293326,-0.9577600454911588,-0.34008001615293326).addAction("lineTo",-0.716000034008175,-0.34008001615293326).addAction("lineTo",-0.716000034008175,-0.5195200246758759).addAction("bezierCurveTo",-0.716000034008175,-0.5718400271609426,-0.6736000319942831,-0.6142400291748344,-0.6212800295092165,-0.6142400291748344).addAction("bezierCurveTo",-0.5689600270241497,-0.6142400291748344,-0.5265600250102578,-0.5718400271609426,-0.5265600250102578,-0.5195200246758759).addAction("lineTo",-0.5265600250102578,-0.3348800159059465).addAction("lineTo",-0.2720000129193066,-0.3324000157881528).addAction("lineTo",-0.2720000129193066,-0.5139200244098902).addAction("bezierCurveTo",-0.2720000129193066,-0.5681600269861519,-0.2284000108484177,-0.6123200290836394,-0.17416000827215594,-0.6129600291140377).addAction("bezierCurveTo",-0.12032000571489317,-0.6136800291482358,-0.07632000362500531,-0.5702400270849465,-0.07632000362500531,-0.5164000245276837).addAction("lineTo",-0.07632000362500531,-0.33488001590594635).addAction("lineTo",2.1358401014469566,-0.33488001590594635).addAction("lineTo",2.1358401014469566,-0.11640000552870322).addAction("lineTo",-0.9577600454911587,-0.11640000552870322).addAction("bezierCurveTo",-1.0195200484246012,-0.11640000552870322,-1.0696000508032737,-0.1664800079073756,-1.0696000508032737,-0.22824001084081819).addAction("lineTo",-1.069600050803274,-0.2282400108408183).addAction("fill","#3a3e42").addAction("stroke","#2d3233",0.08,0).addAction("closePath").addAction("beginPath").addAction("moveTo",0.6087200289126485,-0.49960002372972667).addAction("bezierCurveTo",0.6087200289126485,-0.4333600205834955,0.5549600263591856,-0.3796000180300325,0.48872002321295444,-0.3796000180300325).addAction("lineTo",0.221680010529235,-0.3796000180300325).addAction("bezierCurveTo",0.20592000978067518,-0.3796000180300325,0.19024000903591515,-0.3827200181782246,0.17560000834055248,-0.38880001846700907).addAction("lineTo",-0.040000001899898024,-0.4785600227303803).addAction("bezierCurveTo",-0.05464000259526071,-0.4846400230191648,-0.07032000334002074,-0.48776002316735684,-0.08608000408858058,-0.48776002316735684).addAction("lineTo",-0.7111200337763874,-0.48776002316735684).addAction("bezierCurveTo",-0.7268800345249473,-0.48776002316735684,-0.7425600352697074,-0.4846400230191648,-0.75720003596507,-0.4785600227303803).addAction("lineTo",-0.9728000462055206,-0.38880001846700907).addAction("bezierCurveTo",-0.9874400469008833,-0.3827200181782246,-1.0030400476418435,-0.3796000180300325,-1.018880048394203,-0.3796000180300325).addAction("lineTo",-1.2859200610779227,-0.3796000180300325).addAction("bezierCurveTo",-1.3521600642241538,-0.3796000180300325,-1.4059200667776168,-0.4333600205834955,-1.4059200667776168,-0.49960002372972667).addAction("lineTo",-1.4059200667776168,-0.6584800312761218).addAction("bezierCurveTo",-1.4059200667776168,-0.7247200344223529,-1.3521600642241538,-0.7784800369758159,-1.2859200610779227,-0.7784800369758159).addAction("lineTo",-1.0188800483942033,-0.7784800369758159).addAction("bezierCurveTo",-1.0030400476418437,-0.7784800369758159,-0.9874400469008834,-0.7752800368238241,-0.9728000462055207,-0.7692000365350395).addAction("lineTo",-0.7572000359650701,-0.6795200322754681).addAction("bezierCurveTo",-0.7425600352697075,-0.6734400319866836,-0.7268800345249474,-0.6702400318346917,-0.7111200337763876,-0.6702400318346917).addAction("lineTo",-0.08608000408858064,-0.6703200318384916).addAction("bezierCurveTo",-0.07032000334002081,-0.6703200318384916,-0.054640002595260785,-0.6734400319866837,-0.040000001899898094,-0.6795200322754682).addAction("lineTo",0.17560000834055242,-0.7692000365350395).addAction("bezierCurveTo",0.1902400090359151,-0.7752800368238242,0.20592000978067512,-0.7784800369758159,0.22168001052923494,-0.7784800369758159).addAction("lineTo",0.4887200232129544,-0.7784800369758159).addAction("bezierCurveTo",0.5549600263591855,-0.7784800369758159,0.6087200289126485,-0.7247200344223529,0.6087200289126485,-0.6584800312761218).addAction("lineTo",0.6087200289126485,-0.49960002372972667).addAction("fill","#2d3233").addAction("closePath").addAction("beginPath").addAction("moveTo",1.9216000912711024,-0.2692000127863139).addAction("bezierCurveTo",1.9216000912711024,-0.3354400159325451,1.9753600938245652,-0.38920001848600805,2.0416000969707966,-0.38920001848600805).addAction("lineTo",2.200400104513392,-0.38920001848600805).addAction("bezierCurveTo",2.266720107663423,-0.38920001848600805,2.320400110213086,-0.3354400159325451,2.320400110213086,-0.2692000127863139).addAction("lineTo",2.320400110213086,-0.19728000937029716).addAction("bezierCurveTo",2.320400110213086,-0.13104000622406597,2.266720107663423,-0.077280003670603,2.200400104513392,-0.077280003670603).addAction("lineTo",2.0416000969707966,-0.077280003670603).addAction("bezierCurveTo",1.9753600938245655,-0.077280003670603,1.9216000912711027,-0.13104000622406597,1.9216000912711027,-0.19728000937029716).addAction("lineTo",1.9216000912711024,-0.2692000127863139).addAction("fill","#3a3e42").addAction("stroke","#2d3233",0.08,0).addAction("closePath").addAction("beginPath").addAction("moveTo",2.176000103354454,-0.32800001557916403).addAction("bezierCurveTo",2.1980801044031977,-0.32800001557916403,2.216000105254352,-0.31008001472800967,2.216000105254352,-0.288000013679266).addAction("lineTo",2.216000105254352,-0.17600000835955143).addAction("bezierCurveTo",2.216000105254352,-0.1539200073108077,2.1980801044031977,-0.13600000645965338,2.176000103354454,-0.13600000645965338).addAction("bezierCurveTo",2.1539201023057104,-0.13600000645965338,2.136000101454556,-0.1539200073108077,2.136000101454556,-0.17600000835955143).addAction("lineTo",2.136000101454556,-0.288000013679266).addAction("bezierCurveTo",2.136000101454556,-0.31008001472800967,2.1539201023057104,-0.32800001557916403,2.176000103354454,-0.32800001557916403).addAction("lineTo",2.176000103354454,-0.32800001557916403).addAction("fill","#2d3233").addAction("closePath")
    ).setDescription("A high-damage firearm, at the cost of low firerate."),
    new PetalConfig("Rocket Launcher", 90, 3, 5).setShooter(petalIDOf("Seeking Rocket"), 5/*20*/, 800, 0.1).setSize(1).setDescription("Fires heat-seeking explosive rockets that track enemies."),

    new PetalConfig("Tank Turret", 90, 3, 20).setShooter(petalIDOf("Seeking Rocket"), 20, 30, 0.1).setSize(1).setDescription(""),
];
petalConfigs.push(...newPetals1);

newPetals1 = [
    new PetalConfig("Tank Body", 90, 3, 20).setTurret(petalIDOf("Tank Turret")).setSize(1).setDescription(""),
];
petalConfigs.push(...newPetals1);

const newPetals2 = [
    // custom flowr petals
];
// END

// After references are set
petalConfigs[petalIDOf("Web")].setShootOut(petalIDOf("web.player.launched"));
petalConfigs[petalIDOf("Peas")].setSplits(petalIDOf("Pea.projectile"), 4);
petalConfigs[petalIDOf("Grapes")].setSplits(petalIDOf("projectile.grape"), 4);

export const mobConfigs = [
    new MobConfig("Ladybug", 25, 10, 25, 2.5)
        .addDrop(petalIDOf("Light"))
        .addDrop(petalIDOf("Rose"), .6),
    new MobConfig("Rock", 75, 5, 27.5, 0)
        .addDrop(petalIDOf("Rock"))
        .addDrop(petalIDOf("Heavy"), .5, 2),
    new MobConfig("Bee", 15, 25, 25, 4)
        .setMoveInSines(1)
        .setNeutral(1)
        .addDrop(petalIDOf("Stinger"), .7)
        .addDrop(petalIDOf("Pollen"))
        .addDrop(petalIDOf("Honey"), .4),
    new MobConfig("Spider", 20, 10, 20, 4)
        .setAggressive(1)
        .setPoison(5, 3)
        .setProjectile({
            petalIndex: petalIDOf("Web") + 1,
            cooldown: 22.5,
            health: Infinity,
            damage: 0,
            speed: 0,
            range: 175,
            size: 1,
            runs: true,
            nullCollision: true
        })
        .addDrop(petalIDOf("Faster"))
        .addDrop(petalIDOf("Web"), .5)
        .addDrop(petalIDOf("Third Eye"), .025, 5),
    new MobConfig("Beetle", 30, 10, 30, 3)
        .setAggressive(1)
        .addDrop(petalIDOf("Iris"))
        .addDrop(petalIDOf("Pincer"), .8)
        .addDrop(petalIDOf("Beetle Egg"), .225),
    new MobConfig("Leafbug", 35, 3.5, 30, 2.5)
        .setNeutral(1)
        .setDamageReduction(.13)
        .addDrop(petalIDOf("Leaf"))
        .addDrop(petalIDOf("Bone"), .5)
        .addDrop(petalIDOf("Cactus"), .25),
    new MobConfig("Roach", 30, 5, 30, 5.5)
        .setNeutral(1)
        .addDrop(petalIDOf("Antennae"), 1, 2)
        .addDrop(petalIDOf("Magnolia"), .6)
        .addDrop(petalIDOf("Bone"), .6),
    new MobConfig("Hornet", 35, 15, 30, 3)
        .setAggressive(1)
        .setProjectile({
            petalIndex: petalIDOf("Missile"),
            cooldown: 22.5 * 2,
            health: 4,
            damage: 5,
            speed: 3.75,
            range: 55
        })
        .addDrop(petalIDOf("Missile"))
        .addDrop(petalIDOf("Antennae"), 1, 2)
        .addDrop(petalIDOf("Orange")),
    new MobConfig("Mantis", 35, 10, 32.5, 2)
        .setAggressive(1)
        .setProjectile({
            petalIndex: petalIDOf("Pea.projectile"),
            cooldown: 22.5 * 6.25,
            health: 1.25,
            damage: 1.5,
            speed: 4.5,
            range: 55,
            size: .2,
            multiShot: {
                count: 3,
                delay: 256
            }
        })
        .addDrop(petalIDOf("Peas"))
        .addDrop(petalIDOf("Antennae"), .5, 2),
    new MobConfig("Pupa", 40, 10, 30, 1)
        .setAggressive(1)
        .setProjectile({
            petalIndex: petalIDOf("Rock"),
            cooldown: 22.5 * 3.5,
            health: .8,
            damage: 1.1,
            speed: 4,
            range: 45,
            size: .3,
            multiShot: {
                count: 5,
                delay: 10,
                spread: .2
            }
        })
        .addDrop(petalIDOf("Rock"))
        .addDrop(petalIDOf("Wing"))
        .addDrop(petalIDOf("Heavy"), .5, 2),
    new MobConfig("Sandstorm", 45, 15, 35, 3)
        .setSandstormMovement(1)
        .setSize(35, MobTier.SIZE_SCALE, .9, .25)
        .addDrop(petalIDOf("Sand"))
        .addDrop(petalIDOf("Glass"), .7)
        .addDrop(petalIDOf("Stick"), .2, 2),
    new MobConfig("Scorpion", 45, 7.5, 32.5, 3)
        .setAggressive(1)
        .setStrafes(30, 15, 1.25)
        .setProjectile({
            petalIndex: petalIDOf("Scorpion Missile.projectile"),
            cooldown: 22.5 * 2,
            health: 2,
            damage: 2,
            speed: 5,
            range: 65,
            size: .2
        })
        .addDrop(petalIDOf("Pincer"))
        .addDrop(petalIDOf("Iris")),
    new MobConfig("Demon", 100, 7.5, 35, 1)
        .setAggressive(1)
        .setPushability(0.8)
        .setProjectile({
            petalIndex: petalIDOf("Missile"),
            cooldown: 22.5 * 5,
            health: 1,
            damage: 1,
            speed: 5,
            range: 120,
            size: .1334,
            multiShot: {
                count: 4,
                delay: 128,
                spread: .5
            }
        })
        .addDrop(petalIDOf("Bone"))
        .addDrop(petalIDOf("Lightning"), .2)
        .addDrop(petalIDOf("Fire Spellbook"), .03),
    new MobConfig("Jellyfish", 40, 15, 30, 2.5)
        .setAggressive(1)
        .setLightning([75, 75, 75, 65, 65, 65, 55, 55, 55, 45, 35, 25], [2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8], 125, 2)
        .addDrop(petalIDOf("Lightning"))
        .addDrop(petalIDOf("Jelly")),
    new MobConfig("Cactus", 50, 20, 30, 0)
        .setPushability(0.5)
        .addDrop(petalIDOf("Cactus"))
        .addDrop(petalIDOf("Stinger"), .8),
    new MobConfig("Baby Ant", 10, 5, 15, 2)
        .addDrop(petalIDOf("Light"), .5)
        .addDrop(petalIDOf("Faster"), .5)
        .addDrop(petalIDOf("Rice"), .5),
    new MobConfig("Worker Ant", 15, 5, 15, 3.25)
        .setNeutral(1)
        .addDrop(petalIDOf("Light"), .5)
        .addDrop(petalIDOf("Leaf"), .5)
        .addDrop(petalIDOf("Corn"), .5),
    new MobConfig("Soldier Ant", 25, 5, 15, 3.5)
        .setAggressive(1)
        .addDrop(petalIDOf("Faster"), .5)
        .addDrop(petalIDOf("Wing"), .5),
    new MobConfig("Queen Ant", 100, 5, 25, 3.5)
        .setAggressive(1)
        .setPushability(0.8)
        .addDrop(petalIDOf("Dahlia"))
        .addDrop(petalIDOf("Dirt"), .5)
        .addDrop(petalIDOf("Ant Egg"), .8),
    new MobConfig("Ant Hole", 100, 1, 25, 0)
        .setPushability(0)
        .addDrop(petalIDOf("Dirt"))
        .addDrop(petalIDOf("Ant Egg"), .5),
    new MobConfig("Baby Fire Ant", 10, 10, 15, 2)
        .addDrop(petalIDOf("Light"), .5)
        .addDrop(petalIDOf("Yucca"), .5),
    new MobConfig("Worker Fire Ant", 15, 10, 15, 3.25)
        .setNeutral(1)
        .addDrop(petalIDOf("Light"), .5)
        .addDrop(petalIDOf("Yucca"), .5),
    new MobConfig("Soldier Fire Ant", 25, 10, 15, 3.5)
        .setAggressive(1)
        .addDrop(petalIDOf("Faster"), .5)
        .addDrop(petalIDOf("Glass"), .5),
    new MobConfig("Queen Fire Ant", 100, 10, 25, 3.5)
        .setAggressive(1)
        .setPushability(0.8)
        .addDrop(petalIDOf("Primrose"), .5)
        .addDrop(petalIDOf("Dirt"), .5)
        .addDrop(petalIDOf("Ant Egg"), .8),
    new MobConfig("Fire Ant Hole", 100, 2, 25, 0)
        .setPushability(0)
        .addDrop(petalIDOf("Dirt"))
        .addDrop(petalIDOf("Ant Egg"), .5)
        .addDrop(petalIDOf("Magnet"), .5, 2),
    new MobConfig("Baby Termite", 15, 5, 15, 2)
        .setDamageReduction(.1)
        .setDamageReflection(.05, .5)
        .addDrop(petalIDOf("Bone"), .5)
        .addDrop(petalIDOf("Amulet"), .15),
    new MobConfig("Worker Termite", 20, 5, 15, 3.25)
        .setNeutral(1)
        .setDamageReduction(.1)
        .setDamageReflection(.05, .5)
        .addDrop(petalIDOf("Bone"), .5)
        .addDrop(petalIDOf("Amulet"), .15),
    new MobConfig("Soldier Termite", 30, 5, 15, 3.5)
        .setAggressive(1)
        .setDamageReduction(.1)
        .setDamageReflection(.05, .5)
        .addDrop(petalIDOf("Bone"), .5)
        .addDrop(petalIDOf("Amulet"), .15),
    new MobConfig("Termite Overmind", 150, 2, 30, .5)
        .setAggressive(1)
        .setPushability(0.5)
        .setDamageReduction(.1)
        .setDamageReflection(.05, .5)
        .addDrop(petalIDOf("Ant Egg"), .5)
        .addDrop(petalIDOf("Amulet"), .4),
    new MobConfig("Termite Mound", 150, 1, 30, 0)
        .setDamageReduction(.1)
        .setPushability(0)
        .addDrop(petalIDOf("Dirt"))
        .addDrop(petalIDOf("Armor"), .75)
        .addDrop(petalIDOf("Magnet"), .5),
    new MobConfig("Ant Egg", 20, 1, 15, 0)
        .addDrop(petalIDOf("Ant Egg")),
    new MobConfig("Queen Ant Egg", 20, 1, 15, 0),
    new MobConfig("Fire Ant Egg", 20, 2, 15, 0)
        .addDrop(petalIDOf("Ant Egg")),
    new MobConfig("Queen Fire Ant Egg", 20, 2, 15, 0),
    new MobConfig("Termite Egg", 30, 1, 15, 0)
        .addDrop(petalIDOf("Ant Egg")),
    new MobConfig("Evil Ladybug", 25, 15, 25, 2.5)
        .setAggressive(1)
        .setDamageReduction(.125)
        .addDrop(petalIDOf("Dahlia"))
        .addDrop(petalIDOf("Yin Yang"), .15),
    new MobConfig("Shiny Ladybug", 25, 10, 25, 2.5)
        .setNeutral(1)
        .addDrop(petalIDOf("Primrose"))
        .addDrop(petalIDOf("Yggdrasil"), .15, 3),
    new MobConfig("Angelic Ladybug", 55, 15, 25, 2.5)
        .setNeutral(1)
        .setDamageReflection(.05, .5)
        .addDrop(petalIDOf("Dahlia"))
        .addDrop(petalIDOf("Yin Yang"), .15)
        .addDrop(petalIDOf("Third Eye"), .05, 3),
    new MobConfig("Centipede", 25, 10, 22.5, 3.5)
        .setNeutral(1)
        .setCentipedeMovement(1)
        .addDrop(petalIDOf("Peas"), .5)
        .addDrop(petalIDOf("Leaf"), .5),
    new MobConfig("Centipede", 25, 10, 22.5, 3.5)
        .setSystem(1)
        .setNeutral(1)
        .setCentipedeMovement(1)
        .addDrop(petalIDOf("Peas"), .5)
        .addDrop(petalIDOf("Leaf"), .5),
    new MobConfig("Desert Centipede", 20, 10, 22.5, 5)
        .setDesertCentipedeMovement(1)
        .addDrop(petalIDOf("Powder"), .5)
        .addDrop(petalIDOf("Sand"), .5),
    new MobConfig("Desert Centipede", 20, 10, 22.5, 5)
        .setSystem(1)
        .setDesertCentipedeMovement(1)
        .addDrop(petalIDOf("Powder"), .5)
        .addDrop(petalIDOf("Sand"), .5),
    new MobConfig("Evil Centipede", 25, 10, 22.5, 3.5)
        .setAggressive(1)
        .setCentipedeMovement(1)
        .addDrop(petalIDOf("Iris"), .5)
        .addDrop(petalIDOf("Grapes"), .5),
    new MobConfig("Evil Centipede", 25, 10, 22.5, 3.5)
        .setSystem(1)
        .setAggressive(1)
        .setCentipedeMovement(1)
        .addDrop(petalIDOf("Iris"), .5)
        .addDrop(petalIDOf("Grapes"), .5),
    new MobConfig("Dandelion", 25, 10, 22.5, 0)
        .setPushability(0.5)
        .addDrop(petalIDOf("Dandelion"))
        .addDrop(petalIDOf("Pollen"), .5),
    new MobConfig("Sponge", 35, 3, 30, 0)
        .addDrop(petalIDOf("Sponge")),
    new MobConfig("Bubble", 1, 1, 30, 0)
        .addDrop(petalIDOf("Bubble"), .8)
        .addDrop(petalIDOf("Air"), .8),
    new MobConfig("Shell", 40, 10, 32.5, 25)
        .setMovesInBursts(1)
        .setNeutral(1)
        .addDrop(petalIDOf("Shell"), .8)
        .addDrop(petalIDOf("Pearl"), .5)
        .addDrop(petalIDOf("Magnet"), .2),
    new MobConfig("Starfish", 30, 10, 30, 4)
        .setAggressive(1)
        .setSpins(1)
        .setHealing(.007)
        .setFleeAtLowHealth(.35)
        .addDrop(petalIDOf("Starfish"), .85)
        .addDrop(petalIDOf("Sand"), .85),
    new MobConfig("Leech", 25, 3.5, 16, 5.5)
        .setAggressive(1)
        .addDrop(petalIDOf("Fang"))
        .addDrop(petalIDOf("Faster")),
    new MobConfig("Maggot", 30, 10, 35, 2)
        .setAggressive(1)
        .setProjectile({
            petalIndex: petalIDOf("Goo"),
            cooldown: 22.5 * 2.75,
            health: 2,
            damage: 1,
            speed: 3,
            range: 45,
            size: .35
        })
        .addDrop(petalIDOf("Goo"))
        .addDrop(petalIDOf("Maggot Poo"), .5)
        .addDrop(petalIDOf("Dirt"), .65),
    new MobConfig("Firefly", 30, 10, 25, 4)
        .setMoveInSines(1)
        .addDrop(petalIDOf("Wing"))
        .addDrop(petalIDOf("Lightbulb"), .6)
        .addDrop(petalIDOf("Battery"), .4),
    new MobConfig("Bumblebee", 25, 15, 30, 5)
        .setMoveInSines(1)
        .setBumblebeeMovement(1)
        .setProjectile({
            petalIndex: petalIDOf("Pollen"),
            cooldown: 22.5 * .5,
            health: 1,
            damage: 1,
            speed: 0,
            range: 90
        })
        .addDrop(petalIDOf("Pollen"))
        .addDrop(petalIDOf("Honey")),
    new MobConfig("Moth", 25, 10, 25, 3)
        .setMoveInSines(1)
        .setNeutral(1)
        .setFleeAtLowHealth(1)
        .addDrop(petalIDOf("Wing"))
        .addDrop(petalIDOf("Lightbulb"), .6)
        .addDrop(petalIDOf("Dust"), .4),
    new MobConfig("Fly", 15, 2.5, 20, 6)
        .setAggressive(1)
        .setMoveInSines(1)
        .addDrop(petalIDOf("Wing"))
        .addDrop(petalIDOf("Faster"), .8)
        .addDrop(petalIDOf("Third Eye"), .02, 5),
    new MobConfig("Square", 50, 3.5, 30, 0)
        .addDrop(petalIDOf("Square Egg")),
    new MobConfig("Triangle", 100, 5.5, 32.5, 0)
        .addDrop(petalIDOf("Triangle Egg")),
    new MobConfig("Pentagon", 150, 7.5, 35, 0)
        .addDrop(petalIDOf("Pentagon Egg")),
    new MobConfig("Hell Beetle", 35, 15, 35, 4)
        .setAggressive(1)
        .setPushability(0.8)
        .addDrop(petalIDOf("Dust"), .8)
        .addDrop(petalIDOf("Pincer"), .8)
        .addDrop(petalIDOf("Beetle Egg"), .8),
    new MobConfig("Hell Spider", 25, 15, 20, 4)
        .setAggressive(1)
        .setPoison(5, 3)
        .setPushability(0.8)
        .addDrop(petalIDOf("Faster"))
        .addDrop(petalIDOf("Web"), .5)
        .addDrop(petalIDOf("Dahlia"), .5)
        .setProjectile({
            petalIndex: petalIDOf("Web") + 1,
            cooldown: 22.5,
            health: Infinity,
            damage: 0,
            speed: 0,
            range: 175,
            size: 1,
            runs: true,
            nullCollision: true
        }),
    new MobConfig("Hell Yellowjacket", 65, 5, 25, 4)
        .setAggressive(1)
        .setProjectile({
            petalIndex: petalIDOf("Missile"),
            cooldown: 22.5 * 4,
            health: 4,
            damage: 4,
            speed: 4.5,
            range: 65,
            aimbot: true
        })
        .setPushability(0.8)
        .addDrop(petalIDOf("Missile"))
        .addDrop(petalIDOf("Antennae"), 1, 2),
    new MobConfig("Termite Overmind Egg", 20, 1, 15, 0),
    new MobConfig("Spirit", 1e-15, 0, 35, 1)
        .setSpins(4, 1)
        .addDrop(petalIDOf("Candy"), .1),
    new MobConfig("Wasp", 40, 15, 35, 3)
        .setAggressive(1)
        .setProjectile({
            petalIndex: petalIDOf("Wasp Missile.projectile"),
            cooldown: 22.5 * 5,
            health: 13,
            damage: 1.25,
            speed: 2.5,
            range: 185,
            multiShot: {
                count: 3,
                delay: 256,
                spread: .2
            }
        })
        .addDrop(petalIDOf("Missile"))
        .setPushability(.8)
        .addDrop(petalIDOf("Antennae"), 1, 2)
        .addDrop(petalIDOf("Pollen"), .4),
    new MobConfig("Stickbug", 15, 4, 10, 6.5)
        .setAggressive(1)
        .setPoison(2, 4)
        .addDrop(petalIDOf("Iris"), .75)
        .addDrop(petalIDOf("Powder")),
    new MobConfig("Shrub", 25, 10, 30, 0)
        .setPoison(3, 5)
        .setPushability(0.5)
        .addDrop(petalIDOf("Iris"), .75)
        .addDrop(petalIDOf("Shrub"), .6)
        .addDrop(petalIDOf("Leaf")),
    new MobConfig("Hell Centipede", 25, 10, 22.5, 4)
        .setAggressive(1)
        .setSize(22.5, MobTier.SIZE_SCALE, .75, .25)
        .addDrop(petalIDOf("Powder"), .5)
        .addDrop(petalIDOf("Dust"), .5),
    new MobConfig("Hell Centipede", 25, 10, 22.5, 4)
        .setSystem(1)
        .setAggressive(1)
        .setSize(22.5, MobTier.SIZE_SCALE, .75, .25)
        .addDrop(petalIDOf("Powder"), .5)
        .addDrop(petalIDOf("Dust"), .5),
    new MobConfig("Wilt", 25, 10, 30, 0)
        .setPushability(0)
        .addDrop(petalIDOf("Branch"))
        .addDrop(petalIDOf("Leaf"), .6),
    new MobConfig("Wilt", 25, 10, 15, 2.75)
        .setSystem(1)
        .setAggressive(1)
        .addDrop(petalIDOf("Branch"))
        .addDrop(petalIDOf("Leaf"), .6),
    new MobConfig("Pumpkin", 40, 10, 20, 0)
        .setSize(20, MobTier.SIZE_SCALE, .75, .25)
        .addDrop(petalIDOf("Leaf"), .5)
        .addDrop(petalIDOf("Candy"), .6)
        .addDrop(petalIDOf("Lantern"), .1),
    new MobConfig("Jack O' Lantern", 40, 10, 20, 0)
        .setAggressive(1)
        .setProjectile({
            petalIndex: petalIDOf("Candy"),
            cooldown: 22.5 * .175,
            health: 1,
            damage: 1,
            speed: 5,
            range: 20,
            size: .4
        })
        .addDrop(petalIDOf("Rock"), .8)
        .addDrop(petalIDOf("Candy"), .6)
        .addDrop(petalIDOf("Lantern"), .1),
    new MobConfig("Crab", 30, 10, 30, 7)
        .setAggressive(1)
        .setStrafes(125, 25, .5)
        .addDrop(petalIDOf("Sand"), .4)
        .addDrop(petalIDOf("Claw"), .8),
    new MobConfig("Tank", 50, 3, 20, 2)
        .setAggressive(1)
        .setProjectile({
            petalIndex: petalIDOf("Bullet.projectile"),
            cooldown: 22.5 * .75,
            health: 7.5,
            damage: 2.5,
            speed: 2.5,
            range: 22.5 * 1.5,
            size: .3,
            aimbot: true
        })
        .addDrop(petalIDOf("Square Egg"), .1)
        .addDrop(petalIDOf("Triangle Egg"), .05)
        .addDrop(petalIDOf("Pentagon Egg"), .01)
];

// Flu: Wing, Faster, Third Eye

export const mobIDOf = name => mobConfigs.findIndex(m => m.name === name);

petalConfigs[petalIDOf("Beetle Egg")].setSpawnable(mobIDOf("Beetle"), [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4);
petalConfigs[petalIDOf("Stick")].setSpawnable(mobIDOf("Sandstorm"), [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4);
petalConfigs[petalIDOf("Ant Egg")].setSpawnable(mobIDOf("Soldier Ant"), [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4);
petalConfigs[petalIDOf("Branch")].setSpawnable(mobIDOf("Wilt") + 1, [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5);
petalConfigs[petalIDOf("Leech Egg")].setSpawnable(mobIDOf("Leech"), [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
petalConfigs[petalIDOf("Hornet Egg")].setSpawnable(mobIDOf("Hornet"), [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5);
petalConfigs[petalIDOf("Square Egg")].setSpawnable(mobIDOf("Square"), [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
petalConfigs[petalIDOf("Triangle Egg")].setSpawnable(mobIDOf("Triangle"), [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
petalConfigs[petalIDOf("Pentagon Egg")].setSpawnable(mobIDOf("Pentagon"), [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);

mobConfigs[mobIDOf("Angelic Ladybug")].setPoopable({
    index: mobIDOf("Evil Ladybug"),
    interval: 22.5 * 6
});

mobConfigs[mobIDOf("Ant Hole")].setAntHoleSpawns([{
    index: mobIDOf("Baby Ant"),
    count: [4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7]
}, {
    index: mobIDOf("Worker Ant"),
    count: [5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8]
}, {
    index: mobIDOf("Soldier Ant"),
    count: [6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9]
}, {
    index: mobIDOf("Ant Egg"),
    count: 5
}, {
    index: mobIDOf("Queen Ant"),
    count: 1,
    minHealthRatio: .01
}]);

mobConfigs[mobIDOf("Fire Ant Hole")].setAntHoleSpawns([{
    index: mobIDOf("Baby Fire Ant"),
    count: [4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7]
}, {
    index: mobIDOf("Worker Fire Ant"),
    count: [5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8]
}, {
    index: mobIDOf("Soldier Fire Ant"),
    count: [6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9]
}, {
    index: mobIDOf("Fire Ant Egg"),
    count: 5
}, {
    index: mobIDOf("Queen Fire Ant"),
    count: 1,
    minHealthRatio: .01
}]);

mobConfigs[mobIDOf("Termite Mound")].setAntHoleSpawns([{
    index: mobIDOf("Baby Termite"),
    count: 6
}, {
    index: mobIDOf("Worker Termite"),
    count: 8
}, {
    index: mobIDOf("Soldier Termite"),
    count: 8
}, {
    index: mobIDOf("Termite Egg"),
    count: 5
}, {
    index: mobIDOf("Termite Overmind"),
    count: 1,
    minHealthRatio: .01
}]);

mobConfigs[mobIDOf("Ant Egg")].setHatchables([{
    index: mobIDOf("Baby Ant"),
    time: 22.5 * 15
}, {
    index: mobIDOf("Worker Ant"),
    time: 22.5 * 25
}, {
    index: mobIDOf("Soldier Ant"),
    time: 22.5 * 35
}]);

mobConfigs[mobIDOf("Queen Ant Egg")].setHatchables({
    index: mobIDOf("Soldier Ant"),
    time: 22.5 * 1.5
});

mobConfigs[mobIDOf("Queen Ant")].setPoopable({
    index: mobIDOf("Queen Ant Egg"),
    interval: 22.5 * 2
});

mobConfigs[mobIDOf("Fire Ant Egg")].setHatchables([{
    index: mobIDOf("Baby Fire Ant"),
    time: 22.5 * 15
}, {
    index: mobIDOf("Worker Fire Ant"),
    time: 22.5 * 25
}, {
    index: mobIDOf("Soldier Fire Ant"),
    time: 22.5 * 35
}]);

mobConfigs[mobIDOf("Queen Fire Ant Egg")].setHatchables({
    index: mobIDOf("Soldier Fire Ant"),
    time: 22.5 * 1.5
});

mobConfigs[mobIDOf("Queen Fire Ant")].setPoopable({
    index: mobIDOf("Queen Fire Ant Egg"),
    interval: 22.5 * 2
});

mobConfigs[mobIDOf("Termite Egg")].setHatchables([{
    index: mobIDOf("Baby Termite"),
    time: 22.5 * 15
}, {
    index: mobIDOf("Worker Termite"),
    time: 22.5 * 25
}, {
    index: mobIDOf("Soldier Termite"),
    time: 22.5 * 35
}]);

mobConfigs[mobIDOf("Termite Overmind Egg")].setHatchables({
    index: mobIDOf("Soldier Termite"),
    time: 22.5 * 2
});

mobConfigs[mobIDOf("Termite Overmind")].setPoopable({
    index: mobIDOf("Termite Overmind Egg"),
    interval: 22.5 * 4
});

/**
 * 
 * @param {function(MobConfig)} cb 
 * @returns 
 */

export function queryMob(cb) {
    for (let i = 0; i < mobConfigs.length; i++) {
        if (cb(mobConfigs[i])) {
            return i;
        }
    }

    return -1;
}

mobConfigs[mobIDOf("Centipede")].segmentWith(queryMob(m => m.isSystem && m.name === "Centipede"));
mobConfigs[mobIDOf("Desert Centipede")].segmentWith(queryMob(m => m.isSystem && m.name === "Desert Centipede"));
mobConfigs[mobIDOf("Evil Centipede")].segmentWith(queryMob(m => m.isSystem && m.name === "Evil Centipede"));
mobConfigs[mobIDOf("Hell Centipede")].segmentWith(queryMob(m => m.isSystem && m.name === "Hell Centipede"));
mobConfigs[mobIDOf("Wilt")].branchWith(queryMob(m => m.isSystem && m.name === "Wilt"), 5, 2);

export const DEFAULT_PETAL_COUNT = petalConfigs.length;
export const DEFAULT_MOB_COUNT = mobConfigs.length;

console.log("config.js loaded", petalConfigs.length, "petals", mobConfigs.length, "mobs.");

export const randomPossiblePetal = (rarity) => {
    const possible = [];

    mobConfigs.forEach(mob => {
        mob.drops.forEach(drop => {
            if (drop.index > -1 && rarity >= drop.minRarity) {
                possible.push(drop.index);
            }
        });
    });

    return possible[Math.random() * possible.length | 0];
}
