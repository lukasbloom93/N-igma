//Map legend:
//
// =:Grass 1:Grass_l 2:Grass_r L:Grass_l_top R:Grass_r_top #:Box g:Ghostblock £:Halfblock
//
// @:Monster D:Door i:Ice s:Slime K:Key(green) E:Key(red) Y:Key(blue) ^:Spikes t:Trampoline

// J:doublejump U:teleswap 0:Ghost 8:Grow o:Shrink B:Barrier


export const levels = () => {
  return [
    /*     [
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
      "#====1                     g0        Kg                   ",
      "#+5555      =              gggggggggggg   t               ",
      "#+  J  8  U +                             +               ",
      "#+E         $o                            +   t          2",
      "#+===========1             t              +   +          +",
      "#5555555555555        t    =              +^^^+  21    - +",
      "#                t    =    +  =           +++++  $$ 2====+",
      "#   P     P     2=    +    +  +           55555  ===+5555+",
      "#===============++^^^^+^^^^+^^+                  !!!4  Y +",
      "#++++++++++++++++++++++++++++++==================444=====+",
      "#+++++++++++++++++++++++++++++++++++++++++++++++++++++++++",
      "#|||||||||||||||||||||||||||||||||||||||||||||||||||||||||",
    ],
    [
      "                                               ",
      "                                               ",
      "                                               ",
      "                                               ",
      "                                               ",
      "                                               ",
      "                                               ",
      "                                               ",
      "^             B       8     o  J  d    D   O   ",
      "===============================================",
    ],
    [
      "                                               ",
      "                                               ",
      "                                               ",
      "                                               ",
      "                                               ",
      "                                               ",
      "                                               ",
      "                                               ",
      "              ##      O                        ",
      "===============================================",
    ],
    //0 in progress
    [
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
      "  t P  b#    D  K E Y -           ++++t  d  o  2=======1^",
      "=============6777/=====     2===++++======1 555555++++==",
      "+++++:++++++++++++++3+++wwww+++++++++++++++4     J++++++",
      "+3++++++++¤++++++++++:++====+++3+++++++++++=======++++++",
      "+                             +                         ",
      "+                             +                         ",
      "||||||||||||||||||||||||||||||||||||||||||||||||||||||||",
    ],
    //6
    [
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
    ], */
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
    //   //Lucas
    /*[
      "    P   P       J                       ",
      "###########################            #",
      "# K                                    #",
      "####    ##############                 #",
      "#                     #                #",
      "####wwww############# #                #",
      "# o                   #                #",
      "# #         #    #    #                #",
      "# #777777777#7777#7777#                #",
      "#                     #t               #",
      "######£ ###### £##### ##               #",
      "#   #Y #0     # E#    ##7777777777777  #",
      "#   ####   U J####    #                #                                              ",
      "#   g  ##gg###        #                #                  #  #                #",
      "#   g                 #                #    #   g   #   g #  #   #            #",
      "#   g                 #                #   g   g   g   g  #  #   #     D      #",
      "#   g           8     #                #                  #      #            #",
      "#   g    ###          #                      #            #                      ",
      "# ####################                                                           ",
      "                                       ####wwwwwwwwwwwwwwww#                     ",
      "#################################################################################",
      "|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||", //bottom
    ],*/
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
  ];
}