'use strict';


$(function() {
    var character,
        d,
        time,
        now,
        weapons,
        potions,
        armor;
    // background music
    $('audio')[0].currentTime = 10;
    $('audio')[0].play();

    var World = ( function() {

        function new_character() {
            character = {},
            character.name = null,
            character.health = 100,
            character.money = 100,
            character.weapon = null,
            character.potions = 0;
        }

        function init() {
          d = new Date()
          time = d.getHours();
          if (time < 12) {
            now = 'morning';
          } else if (time > 12 && time < 17) {
            now = 'noon';
          } else if (time > 17 && time < 20) {
            now = 'evening';
          } else {
            now = "night";
          }
          console.log(now);
          new_character();
        }

        // explicitly return public methods when this object is instantiated
        return {
          init : init
        };

    } )();

    var Items = (function(){
        weapons = [
            {
                item:  'Paladin Sword',
                damage: 10,
                price:  40
            },
            {
                item:  'Battle Axe',
                damage: 20,
                price:  60
            },
            {
                item:  'War Club',
                damage: 30,
                price:  80
            }
        ];

        armor = [
            {
                item:  'Leather Cap',
                defense: 10,
                price:  10
            },
            {
                item:  'Battle Armor',
                defense: 40,
                price:  40
            },
            {
                item:  'Sheild',
                defense: 30,
                price:  30
            }
        ];

        potions = [
            {
                item:  'Healing Potion',
                health: 10,
                price:  20
            },
            {
                item:  'Healing Potion',
                health: 10,
                price:  20
            },
            {
                item:  'Healing Potion',
                health: 10,
                price:  20
            },
            {
                item:  'Healing Potion',
                health: 10,
                price:  20
            }
        ];
    })();

    // Game start
        // show start screen
        setTimeout(function() {
            $('#start-screen').fadeIn(2000);
            $('#start-screen p').fadeIn(3000);
            $('#start-screen button').delay(3000).fadeIn(5000);
            $('#start-screen .glow-ball').fadeIn();
            $('#start-screen #mountain-king').delay(4000).fadeIn(5000);
        }, 500)
        // when user clicks start button
        $('#start-btn').on('click', function(){
            World.init();
            // boom
            $('audio')[1].volume = 1;
            $('audio')[1].play();




        // Scene 1: Waking up in the village.
            // change scene to Village
            $('.active').removeClass('active').fadeOut(500);
            $('body').addClass(now);
            $('#village').addClass('active').delay(500).fadeIn(2000);
            // Show text on screen to let user know what's going on
            $('#village .one').fadeIn(4000).delay(7000).fadeOut(1000)
            .next().delay(12000).fadeIn(1000)
            .next().delay(12000).fadeIn(1000);
            // $('#villager').fadeIn(4000);
            // $('#village h3').fadeIn(4000);

            setTimeout(function() {
                //creak
                $('audio')[2].volume = 0.25;
                $('audio')[2].play();
            }, 9000);
        });

        // prompt user for name, age, sex
        $('#village .first-next-btn').on('click', function() {
            // $('#villager').fadeOut();
            // $('#village h3').fadeOut();
            var name = $('#name').val();
            if (name !== '') {
                character.name = name;
            } else {
                character.name = 'Ragnar';
            }
            $('#village p').fadeOut(1000);
            $('#village .four').delay(1500).fadeIn(2000);
            // $('#villager').fadeIn(2000);
            // $('#village h3').fadeIn(2000);
            //sheath
            $('audio')[3].volume = 0.75;
            $('audio')[3].play();
        });

        $('#village .next-btn-two').on('click', function() {
            $('#village .four').fadeOut(1000);
            $('#village .theName').text(character.name);
            $('#village .five').delay(1500).fadeIn(2000)
            .next().delay(3000).fadeIn(2000);
            //whoosh
            $('audio')[4].volume = 0.75;
            $('audio')[4].play();
        });

        $('#village .third-next-btn').on('click', function() {
            $('#village .five').fadeOut(1000);
            $('#village .six').fadeOut(1000).next().delay(2000).fadeIn(1000);
        });

        $('#village .fourth-next-btn').on('click', function(){
            //boom
            $('audio')[1].volume = 1;
            $('audio')[1].play();
            $('#village').removeClass('active').fadeOut(1000).next().delay(2000).fadeIn(2000);
        });




    // Scene 2: Getting ready for the wilds.
    $('#market .one').delay(2000).fadeIn(1000);
        // Prompt user about buying a weapon 'character.weapon'
        $('#market .first-next-btn').on('click', function() {
            $('#market .one').fadeOut(1000);
            $('#market .two-a').delay(3000).fadeIn(1000);
        });
        // if the blacksmith button is clicked
        $('#market #blacksmith').on('click', function() {
            $('#market').fadeOut(1000);
            // play armor sound effect

            // add weapons and armor to dom

            $('#blacksmith-store').delay(2000).fadeIn(1000);

        });
        // if the apothecary button is clicked
        $('#market #apothecary').on('click', function() {
            $('#market').fadeOut(1000);
            // play bubble sound effect

            // add potions to dom
            item = '';
            for (i = 0; i < Items.potions.length; i++) {
               item += '<li class="item"> Item: ' + Items[i].item + '<br> Health: &plus;' +  Items[i].health + '<br> Price: &#x20B9;' +  Items[i].price + '</li>';
               $('#potions-list ul').append(item);
            }

            $('#apothecary-store').delay(2000).fadeIn(000);

        });

        // Shopping Functionality


        // when the user is done
        $('#done-shopping').on('click', function() {
            // boom
            $('audio')[1].play();
            $(this).closest('section').fadeOut(1000);
            $('#market ').delay(2000).fadeIn(1000);
            $('#market .two-a').hide();
            $('#market .two-b').delay(2000).fadeIn(1000);
            if (character.weapon !== null && character.potions > 0) {
                $('#to-plains').fadeIn(1000);
            }
        });

        // if the user is ready to leave the village
        $('#to-plains').on('click', function() {
            $(this).closest('section').fadeOut(1000);
            $('#plains').delay(2000).fadeIn(1000);
        });

    // Scene 3: The open plains.
        // prompt user about where to travel
        // small monster fight
            // prompt user about potions

    // Scene 4: Cave or Mountain
        //

    // Scene 5: Troll or Dragon

    // Scene 6: Return to Village



}()); //end jquery
