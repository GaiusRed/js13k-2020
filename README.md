# 404 Blades

A js13k game for the 2020 competition (Theme: 404).

```
yarn
yarn exec gulp build
```

# UPDATE: Day 8, I give up.

I have the ga! game engine, with the Tiled 2 plugins (read tiled json output, check if sprites hit, etc.), one level and zero gameplay. My compressed size is already at 12,010 bytes.

# The rest of my planned notes

- 404 Unique Weapons
    - 7 Base Types
        - Tier 1
            - Dagger (1 to 50 Physical, short front stab)
        - Tier 2
            - Sword (25 to 75 Physical, short front and to the side slice)
            - Bow (1 to 50 Physical, straight shot until arrow hits)
            - Spear (25 to 75 Physical, long front stab)
        - Tier 3
            - Greatsword (50 to 100 Physical, same as sword)
            - Greatbow (25 to 75 Physical, same as bow)
            - Greatspear (50 to 100 Physical, same as spear)
    - 8 Prefixes
        - 3 Additional Elemental Damage
            - Flaming
            - Druidic
            - Freezing
        - 1 Kinetic (Additional Physical Damage)
        - 1 Rejuvenating (Heal half of damage dealt)
        - 1 Cursed (Half Damage)
        - 1 Slaying (Double Damage)
        - 1 Unique Prefix Effect per Base
            - Teleporting Dagger (If your attack doesn't do any damage, teleport to a random square)
            - Heavy Sword (Knockback 1 square)
            - Piercing Bow (Hits every enemy in line)
            - Shield and Spear (First hit per room becomes zero)
            - Massive Greatsword (Knockback 2 squares)
            - Mirage Greatbow (Fire a second arrow in a random direction)
            - Greatshield and Greatspear (First two hits per room becomes zero)
    - 7 Suffixes
        - 3 Additional Elemental Damage
            - of Freyr (Fire)
            - of Sif (Earth)
            - of Skadi (Ice)
        - 1 of Tyr (Additional Physical Damage)
        - 1 of Freya (Heal half of damage dealt)
        - 1 of Loki (Half Damage)
        - 1 of Odin (Double Damage)
    - 12 Uniques
        - 7 Base Weapons
        - 5 Actual Uniques
            - Dainsleif (Flaming Druidic Greatsword of Skadi)
            - Gungnir (Greatshield and Slaying Greatspear of Odin)
            - Mjolnir (Piercing Slaying Greatbow of Odin)
            - Golden Apples of Loki (Heals 50 health per use)
            - Laevateinn (Teleporting Slaying Dagger of Odin)
- Other items:
    - Shield, max 3 (Does not regen unlike the Spear/Greatspear enchants)
    - Potion (Heals 50 health)
    - Key (Opens Door)
