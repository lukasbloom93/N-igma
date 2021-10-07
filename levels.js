//Map legend:
//
// =:Grass 1:Grass_l 2:Grass_r L:Grass_l_top R:Grass_r_top #:Box g:Ghostblock £:Halfblock
//
// @:Monster D:Door i:Ice s:Slime K:Key(green) E:Key(red) Y:Key(blue) ^:Spikes t:Trampoline

// J:doublejump U:teleswap 0:Ghost 8:Grow o:Shrink B:Barrier

/*Template Level[
  "#z       z       z       z       z       z       z       z",
  "#                                                         ",
  "#                                                         ",
  "#                                                         ",
  "#                                                         ",
  "#                                                         ",
  "#                                                         ",
  "#                                                         ",
  "#                                                         ",
  "#                                                         ",
  "#                                                         ",
  "#                                                         ",
  "#                                                         ",
  "#                                                         ",
  "#                                                         ",
  "#                                                         ",
  "#                                                         ",
  "#                                                         ",
  "#                                                         ",
  "#                                                         ",
  "#                                                         ",
  "#|||||||||||||||||||||||||||||||||||||||||||||||||||||||||",
],*/

export const levels = () => {
  return [
    //0
  [
    "#z       z       z       z       z       z       z       z       z       z       z       z       z       z       z       z       z       z       z       z       z     #",
    "#                                                        <                                                                                                             #",
    "#                              >                                                                           >                                                           #",
    "#                                           >                            <                                                                                             #",
    "#        <                                                                                   x                                  x                                      #",
    "#                                                            x                                                                                                         #",
    "#                  >                                                                                              <                                                    #",
    "#                            x                <                 x            >                                                                         x               #",
    "#                                                                                                                                                                      #",
    "#              x                                                                                                                                P P                    #",
    "#                                                                                                              x                                67777/                 #",
    "#                                            x                                                                                                               b         #",
    "#                                                                                                                                                     6777777/         #",
    "#                                                            -                                                               b                  b                      #",
    "#                                                         =======                  =                                         =               t  677                    #",
    "#                                   K     E             gg              B^^^^^^2===+                       -              U d                +  555777                 #",
    "#           !                     2==1   2==1          gg              2=======+555+              =     2===1           2=====               +     555777              #",
    "#     +     !   -       J J       +3++ Y ++++         gg               ++5555555   +              +     ++3++=          +55555               +        555777           #",
    "#======+====4=====1   2=======1   ++:++:+++++       0gg                o$    d               8 =  :  ?  +++:++=                     b -   t  + t444      55+777   D    #",
    "#+3+++¤++++++:3++++   +++++:+++   +++++++¤+++   =======    ==    ==================  ==========+==+  ?  +¤+++++===========wwwwwwwwww!========+=============+:++========#",
    "#+++++++:+++3++++++   ++¤++++++   +++3+++++++   +3++:++          ++¤++++:3++++++++3  +:++++++++:+++  ?  +++:+++3+++¤++++:++++++3++++!++:+++++++:++¤++++++++++++3+++++++#",
    "#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||?|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#",
  ],
    //1
    [
      "#z       z       z       z       z       z     #",
      "#                            <                 #",
      "#       >                                      #",
      "#   x                                 >        #",
      "#                       x                      #",
      "#           <                                  #",
      "#                                              #",
      "#                                              #",
      "#                                              #",
      "#                                              #",
      "#                                              #",
      "#                                              #",
      "#                                              #",
      "#                             0   E            #",
      "#                             #########        #",
      "#                             g       g        #",
      "#                             g       g        #",
      "#                             g   Y   g        #",
      "# P P         b   K   b  -  t g       g    D   #",
      "#======677777/+wwwwwww!========================#",
      "#+3++::++3+++++++++:++!+++¤++:+++++3¤+++:++++++#",
      "#||||||||||||||||||||||||||||||||||||||||||||||#",
    ],

    //2
    [
      "#z       z       z       z       z       z       z       z",
      "#                                                         ",
      "#                                                         ",
      "#                                                         ",
      "#                                                         ",
      "#                                                         ",
      "#                                                         ",
      "#                                                         ",
      "#                                                         ",
      "# D                        ============                   ",
      "#===1                      g0        Kg                   ",
      "#3555       =              gggggggggggg   t               ",
      "#+  J  8  U :                             :               ",
      "#:E         $o                            +   t          2",
      "#+===========1             t              +   +          +",
      "#5555555555555        t    =              +^^^3  21    - ¤",
      "#                t    =    :  =           +++++  $$ 2====+",
      "#   P     P     2=    +    +  +           55555  ===+5555+",
      "#===============++^^^^+^^^^+^^+                  !!!4  Y +",
      "#:++++3++++++¤+++++++++++++++3+==================444=====+",
      "#++¤++++3++++++:+++++++:+++¤++++++++++++:++++++++++++¤++++",
      "#|||||||||||||||||||||||||||||||||||||||||||||||||||||||||",
    ],
    //3
    [
      "#z       z       z       z       z       z       z       z       z       z       z       z       z       z      z       z       z     z    z ",
      "#           <             x                                                                                        <             x          #",
      "#                                          >                                           x            <                                       #",
      "#   P   P                   J                                  <                                                                            #",
      "#=====================================1                                                           >                                         #",
      "#+3++++¤+++++++++:++++++++:++++++++++++                                                                                        >            #",
      "#555555555555555555555555555555555555                   #                                                                                   #",
      "# K                                                     #                                                       x                           #",
      "#==1     2==========================1                   #            2=1                                                                    #",
      "#+++44444+++++3+++++++++++3++++++++++                   #          2=+¤+=1                                                           x      #",
      "#+++44444555555555555555555555555555+                   #       2==+++++++==1                                                               #",
      "#+++wwwww=========================14+                   #       +55555555555+                                                               #",
      "#++++3+++++:+++++3+++++++:+++++++++4+t                  #       + 0      U J+                                                               #",
      "#55555555555555555555555555555555554++                  #       +===1ggg2===+                                     #                         #",
      "# o                b           b   4++                  #       ++5554445553+                                 g   ##       #                #",
      "# 2677777777777777777777777777777777++6777777777777777771       +: 8 444   ++g               #     g    #    g    ###      #                #",
      "#4+++++++++:++++++++++++++++:+++++++++++++3+++++++¤++++++       ++   444   55g              g     g    g    g     ####     #                #",
      "#45555555555555555555555555555555555555555555555555555555       55444444444  g                                    #####    #      D         #",
      "#======================£ 2====1  2====1 £================================================1                        2==========================",
      "#+++:++++++++¤++++++++Y 2++++++==¤+++++1 E++:+++++++++++3+++++:+++++++++++++:++++++¤++++++1wwwwwwwwwwwwwwwwwwwwwww++:++++++++++3+++++++++++++",
      "#+++++++++++++++++++++==+++++:++++++++++==++++++:++++++++++++++++++++:++++++++++3++++++3++++++++++++++++++:+++++++++++++¤+++++++++++++:++++++",
      "#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||",
    ],
    //4
    [
      "#z       z       z       z       z       z       z       z #",
      "#                                                          #",
      "#                                                          #",
      "#                                                          #",
      "#                                                          #",
      "#                                                          #",
      "#                                                          #",
      "#                                                          #",
      "#                                                          #",
      "#                                                          #",
      "#   ?                                                    D #",
      "#- ££                                                 2====#",
      "#+++++  =                         2====               +5555#",
      "#55555  +   t    t    t      B    +   g               +    #",
      "#U  K   $ P +^^^^+^^^^+  U        $0 Eg             - +    #",
      "#===========+====+====+====================1    2=====+4444#",
      "#555555555555555555555555555555555555555555+=   +5555554444#",
      "#                       !                  5+=  +      4444#",
      "# -  P                  ! o ^^^^^^^^^^^     55  bJ    Y4444#",
      "#=============44===44===4===+++++++++++=========!==========#",
      "#+++++++++++++44+++44+++++++++++++++++++++++++++!++++++++++#",
      "#||||||||||||||||||||||||||||||||||||||||||||||||||||||||||#",
    ],
    /*[
      "z       z       z       z       z       z       z       ",
      "                                                        ",
      "                                                        ",
      "                                                        ",
      "                                                        ",
      "         <                                              ",
      "                            >     c                     ",
      "                             ==============             ",
      "                                                x       ",
      "                   x   ==             ###               ",
      "                                                        ",
      "                                                U       ",
      "                           ==                 ====      ",
      "                                  B                     ",
      "                                2==1                    ",
      "  t P  b#    D     J             ++++t  d  o  2=======1^",
      "=============6777/=====     2===++++======1 555555++++==",
      "+++++:++++++++++++++3+++wwww+++++++++++++++4     J++++++",
      "+3++++++++¤++++++++++:++====+++3+++++++++++=======++++++",
      "+                             +                         ",
      "+                             +                         ",
      "||||||||||||||||||||||||||||||||||||||||||||||||||||||||",
    ],

    //   //1
    //   [
      //     "         Y       key                              ",
      //     "   D                                              ",
      //     "                                                  ",
      //     "         E      U                                 ",
      //     "gggggggggggggggggg                                ",
      //     "                                     K            ",
      //     "                                   ^^iiii         ",
      //     "                                   ######  #      ",
      //     "           g                       ££££££ ##      ",
      //     "       J  0g      t                #=========     ",
      //     "           g      £     o          #              ",
      //     "#####################^####sssssssss###############",
      //     "##################################################",
      //   ],
        
        //   //3
        //   [
          //     "                 key                           ",
          //     "        Y                         E            ",
          //     "        #####                   ggg            ",
          //     "            #                 ggg              ",
          //     "            #               ggg                ",
          //     "            #  t           ggg                 ",
          //     "            #######     ggg             D      ",
          //     "        O   g#U    #g                          ",
          //     "^           g     0 gK t   J                   ",
          //     "===============================================",
          //   ],
          //   //4 camera and size tests
          //   [
            
            //     "1                                                                 2",
            //     "1                                                                 2",
            //     "1                                                                 2",
            //     "1    P                                                            2",
            //     "1                                                                 2",
            //     "1                                                                 2",
            //     "1                                                                 2",
            //     "1                                                                 2",
            //     "1                                                                 2",
            //     "1     P                                                           2",
            //     "1                                                       O         2",
            //     "1                                                                 2",
            //     "1         J                                                       2",
            //     "1                                                                 2",
            //     "1            B                                                    2",
            //     "1                    ^^                                           2",
            //     "###################################################################",
            //   ],
            /*[
              "key                                                  ",
              "2                                                    ",
              "2                                                    ",
              "2                                                    ",
              "2                                                    ",
              "2                                                    ",
              "2                                                    ",
              "2                                                    ",
              "2       K                                            ",
              "2      ##                                            ",
              "2     ##                                             ",
              "2                                                    ",
              "2           J                                        ",
              "2         ^^^    U                                   ",
              "2  ^iiiiii#############                              ",
              "2  #                  ##                             ",
              "2  #Y      ¤          #$$                            ",
              "2  #E      ¤ o8   dd  _  %%   PP dJB  ^   O          ",
              "2  ########$#########################################",
              "2                                                    ",
              "2||||||||||||||||||||||||||||||||||||||||||||||||||||",
            ],*/
  ];
};
