var constants = {
  di: 0.17,
  lsi_max: 1.095,
  lsi_min: 0.92,
  decay: 0.051,
  gravity: {
    mult: 5,
    constant: 0.075,
  },
  shorthop_aerial: 0.85,
  bounce: 0.8,
  crouch_cancelling: 0.85,
  crouch_hitlag: 0.67,
  buried_kb_threshold: 90,
  hitstun: 0.4,
  launch_speed: 0.03,
  tumble_threshold: 32,
  hitlag: {
    mult: 0.65,
    constant: 6,
    parryConstant: 14,
    parryMax: 30,
  },
  hitstunCancel: {
    frames: {
      aerial: 45,
      airdodge: 40,
    },
    launchSpeed: {
      aerial: 2,
      airdodge: 2.5,
    },
  },
  paralyzer: {
    constant: 1,
    mult: 1,
    max: 90,
  },
  shield: {
    projectile: 0.29,
    perfectShield: 1,
    mult: 0.8,
    constant: 3,
    aerial: 0.33,
    grounded: 0.725,
  },
};

export let parseFighterName = name => {
  if (name == "Pac-Man") {
    return "Pac-Man";
  } else {
    return name.split("-").join(" ");
  }
};

export let hyphenateFighterName = name => {
  return name.split(" ").join("-");
};

export let generateKey = pre => {
  return `${pre}_${new Date().getMilliseconds()}_${Math.random()}`;
};

export let parseLastHitInt = frames => {
  return parseInt(
    frames
      .replace("...", "")
      .split("/")[0]
      .trim()
  );
};

export let parseMultihit = frames => {
  return frames.replace("...", "").split("/");
};

export let isNumStartupEqualToNumActive = (startup, active) => {
  return startup.split("/").length === active.split("/").length;
};

export let getShieldlagString = (
  damageStr,
  hitlagStr,
  is_electric,
  is_projectile
) => {
  var shieldStr = "";
  var damages = parseMultihit(damageStr);
  var hitlags = parseMultihit(hitlagStr);

  for (var i = 0; i < damages.length; i++) {}
};

// Formulas adapted from Ruben's Calculator https://rubendal.github.io/SSBU-Calculator/
export let computeRecovery = (startup, active, total) => {
  if (
    startup !== null &&
    active !== null &&
    total !== null &&
    startup !== undefined &&
    active !== undefined &&
    total !== undefined
  ) {
    return (
      parseLastHitInt(total) -
      (parseLastHitInt(startup) - 1 + parseLastHitInt(active))
    );
  }
};

export let calcHitlag = (base_dmg, hitlag_mult, isElectric) => {
  var electric_mult = 1;
  if (isElectric) {
    electric_mult = 1.5;
  }
  var h = Math.floor(
    (base_dmg * constants.hitlag.mult + constants.hitlag.constant) *
      electric_mult *
      hitlag_mult
  );
  if (h > 30) {
    return 30;
  }
  if (h < 0) {
    return 0;
  }
  return h;
};

export let calcHitstun = (kb, isWindbox) => {
  if (isWindbox) {
    return 0;
  }
  var hitstun = kb * constants.hitstun;
  if (hitstun < 0) {
    return 0;
  }

  if (hitstun < 5) hitstun = 5;

  return Math.floor(hitstun) - 1;
};

export let calcAttackerShieldHitlag = (
  damage,
  hitlag,
  electric,
  //perfectShield,
  is_projectile
) => {
  if (is_projectile) return 0;
  var h = calcShieldHitlag(
    damage,
    hitlag,
    electric,
    //perfectShield,
    is_projectile
  );
  //if (perfectShield) h += 3;
  return h;
};

export let calcShieldHitlag = (damage, hitlag, electric, is_projectile) => {
  hitlag *= 0.67;
  if (damage == 0) return 0;
  return calcHitlag(damage, hitlag, electric, 1, is_projectile);
};

export let calcShieldStunMultiplier = (
  multiplier,
  is_projectile,
  is_smash,
  is_aerial
) => {
  var projectileMult = is_projectile ? constants.shield.projectile : 1;
  var groundedMult = is_smash ? constants.shield.grounded : 1;
  var aerialMult = is_aerial ? constants.shield.aerial : 1;
  var mult = 1;
  if (multiplier != 1) mult = multiplier;
  else if (is_projectile) mult = projectileMult;
  else if (is_aerial) mult = aerialMult;
  else if (is_smash) mult = groundedMult;

  return mult;
};

export let calcShieldStun = (
  damage,
  multiplier,
  is_projectile,
  //perfectShield,
  is_smash,
  is_aerial
) => {
  if (damage == 0) return 0;

  var projectileMult = is_projectile ? constants.shield.projectile : 1;
  var groundedMult = is_smash ? constants.shield.grounded : 1;
  //var perfectshieldMult = perfectShield ? constants.shield.perfectShield : 1;
  var aerialMult = is_aerial ? constants.shield.aerial : 1;
  var mult = 1;
  if (multiplier != 1) mult = multiplier;
  else if (is_projectile) mult = projectileMult;
  else if (is_aerial) mult = aerialMult;
  else if (is_smash) mult = groundedMult;
  return (
    Math.floor(
      damage * constants.shield.mult * mult + constants.shield.constant
    ) - 1
  );
};

//Formula by Arthur https://twitter.com/BenArthur_7/status/926918804466225152
export let calcShieldPushback = (
  damage,
  projectile,
  //perfectShield,
  is_smash,
  is_aerial
) => {
  var projectileMult = projectile ? constants.shield.projectile : 1;
  //var perfectshieldMult = perfectShield ? constants.shield.perfectShield : 1;
  var aerialMult = is_aerial ? constants.shield.aerial : 1;
  var groundedMult = is_smash ? constants.shield.grounded : 1;
  //var perfectshieldMult2 = perfectShield ? 0.15 : 1;

  var pushback =
    (damage *
      constants.shield.mult *
      projectileMult *
      //perfectshieldMult *
      groundedMult *
      aerialMult +
      constants.shield.constant) *
    0.09;
  //* perfectshieldMult2;
  if (pushback > 1.3) pushback = 1.3;

  return pushback;
};

export let calcAttackerShieldPushback = (damage, is_projectile = false) => {
  if (is_projectile) return 0;

  return damage * 0.04 + 0.025;
};

export let calcShieldAdvantage = (
  damage,
  shieldstunMult,
  hitlag,
  hitframe,
  FAF,
  is_projectile,
  electric,
  //perfectshield,
  is_smash,
  is_aerial
) => {
  return (
    hitframe -
    (FAF - 1) +
    calcShieldStun(
      damage,
      shieldstunMult,
      is_projectile,
      //perfectshield,
      is_smash,
      is_aerial
    ) +
    calcShieldHitlag(damage, hitlag, electric) - //, perfectshield) -
    (is_projectile ? 0 : calcAttackerShieldHitlag(damage, hitlag, electric)) //, perfectshield))
  );
};
