/** @preserve
 * PokéSprite r21 <https://github.com/msikma/pokesprite>
 * (C) 2014, Michiel Sikma <dada@doubla.de> and PokéSprite contributors
 * (C) 1995-2014 Nintendo/Creatures Inc./GAME FREAK Inc.
 * For a full list of contributors, view the project commit history.
 * Generated on 2014-08-26 19:34:32.
 *
 */
;(function(){

/**
 * PokéSprite main code and icon processor.
 *
 * This class has been generated, so editing it directly is not recommended.
 *
 * @static
 */
window["PkSpr"] = (function()
{
    var self = this;
    
    /**
     * Base CSS class that identifies an element as ours.
     *
     * @const
     * @type {!string}
     */
    self.PKSPR_BASE_CLASS = "pkspr";
    
    /**
     * List of types and their sizes.
     *
     * @const
     * @type {!Object}
     */
    self.PKSPR_TYPES = {"pkmn":{"w":40,"h":30},"etc":{},"body-style":{"w":32,"h":32},"apricorn":{"w":30,"h":30},"battle-item":{"w":30,"h":30},"berry":{"w":30,"h":30},"ev-item":{"w":30,"h":30},"evo-item":{"w":30,"h":30},"flute":{"w":30,"h":30},"fossil":{"w":30,"h":30},"gem":{"w":30,"h":30},"hm":{"w":30,"h":30},"hold-item":{"w":30,"h":30},"incense":{"w":30,"h":30},"other-item":{"w":30,"h":30},"key-item":{"w":30,"h":30},"mail":{"w":30,"h":30},"medicine":{"w":30,"h":30},"mega-stone":{"w":30,"h":30},"mulch":{"w":30,"h":30},"plate":{"w":30,"h":30},"pokeball":{"w":30,"h":30},"scarf":{"w":30,"h":30},"shard":{"w":30,"h":30},"tm":{"w":30,"h":30},"valuable-item":{"w":30,"h":30},"wonder-launcher":{"w":30,"h":30},"status":{"w":10,"h":10}};
    
    /**
     * Coordinate and size data for every single icon. Size data is
     * not included if the type's size can already be found
     * in the PKSPR_TYPES constant.
     *
     * @const
     * @type {!Object}
     */
    self.PKSPR_DATA = {"pkmn":{"bulbasaur":{".":{".":{"regular":{"x":0,"y":0},"shiny":{"x":40,"y":0}}}},"ivysaur":{".":{".":{"regular":{"x":80,"y":0},"shiny":{"x":120,"y":0}}}},"venusaur":{".":{".":{"regular":{"x":160,"y":0},"shiny":{"x":200,"y":0}}},"mega":{".":{"regular":{"x":240,"y":0},"shiny":{"x":280,"y":0}}}},"charmander":{".":{".":{"regular":{"x":320,"y":0},"shiny":{"x":360,"y":0}}}},"charmeleon":{".":{".":{"regular":{"x":400,"y":0},"shiny":{"x":440,"y":0}}}},"charizard":{".":{".":{"regular":{"x":480,"y":0},"shiny":{"x":520,"y":0}}},"mega-x":{".":{"regular":{"x":560,"y":0},"shiny":{"x":600,"y":0}}},"mega-y":{".":{"regular":{"x":640,"y":0},"shiny":{"x":680,"y":0}}}},"squirtle":{".":{".":{"regular":{"x":720,"y":0},"shiny":{"x":760,"y":0}}}},"wartortle":{".":{".":{"regular":{"x":800,"y":0},"shiny":{"x":840,"y":0}}}},"blastoise":{".":{".":{"regular":{"x":880,"y":0},"shiny":{"x":920,"y":0}}},"mega":{".":{"regular":{"x":960,"y":0},"shiny":{"x":1000,"y":0}}}},"caterpie":{".":{".":{"regular":{"x":1040,"y":0},"shiny":{"x":1080,"y":0}}}},"metapod":{".":{".":{"regular":{"x":1120,"y":0},"shiny":{"x":1160,"y":0}}}},"butterfree":{".":{".":{"regular":{"x":1200,"y":0},"shiny":{"x":1240,"y":0}}}},"weedle":{".":{".":{"regular":{"x":0,"y":30},"shiny":{"x":40,"y":30}}}},"kakuna":{".":{".":{"regular":{"x":80,"y":30},"shiny":{"x":120,"y":30}}}},"beedrill":{".":{".":{"regular":{"x":160,"y":30},"shiny":{"x":200,"y":30}}}},"pidgey":{".":{".":{"regular":{"x":240,"y":30},"shiny":{"x":280,"y":30}}}},"pidgeotto":{".":{".":{"regular":{"x":320,"y":30},"shiny":{"x":360,"y":30}}}},"pidgeot":{".":{".":{"regular":{"x":400,"y":30},"shiny":{"x":440,"y":30}}}},"rattata":{".":{".":{"regular":{"x":480,"y":30},"shiny":{"x":520,"y":30}}}},"raticate":{".":{".":{"regular":{"x":560,"y":30},"shiny":{"x":600,"y":30}}}},"spearow":{".":{".":{"regular":{"x":640,"y":30},"shiny":{"x":680,"y":30}}}},"fearow":{".":{".":{"regular":{"x":720,"y":30},"shiny":{"x":760,"y":30}}}},"ekans":{".":{".":{"regular":{"x":800,"y":30},"shiny":{"x":840,"y":30}}}},"arbok":{".":{".":{"regular":{"x":880,"y":30},"shiny":{"x":920,"y":30}}}},"pikachu":{".":{".":{"regular":{"x":960,"y":30},"shiny":{"x":1000,"y":30}}}},"raichu":{".":{".":{"regular":{"x":1040,"y":30},"shiny":{"x":1080,"y":30}}}},"sandshrew":{".":{".":{"regular":{"x":1120,"y":30},"shiny":{"x":1160,"y":30}}}},"sandslash":{".":{".":{"regular":{"x":1200,"y":30},"shiny":{"x":1240,"y":30}}}},"nidoran-f":{".":{".":{"regular":{"x":0,"y":60},"shiny":{"x":40,"y":60}}}},"nidorina":{".":{".":{"regular":{"x":80,"y":60},"shiny":{"x":120,"y":60}}}},"nidoqueen":{".":{".":{"regular":{"x":160,"y":60},"shiny":{"x":200,"y":60}}}},"nidoran-m":{".":{".":{"regular":{"x":240,"y":60},"shiny":{"x":280,"y":60}}}},"nidorino":{".":{".":{"regular":{"x":320,"y":60},"shiny":{"x":360,"y":60}}}},"nidoking":{".":{".":{"regular":{"x":400,"y":60},"shiny":{"x":440,"y":60}}}},"clefairy":{".":{".":{"regular":{"x":480,"y":60},"shiny":{"x":560,"y":60}},"right":{"regular":{"x":520,"y":60},"shiny":{"x":600,"y":60}}}},"clefable":{".":{".":{"regular":{"x":640,"y":60},"shiny":{"x":720,"y":60}},"right":{"regular":{"x":680,"y":60},"shiny":{"x":760,"y":60}}}},"vulpix":{".":{".":{"regular":{"x":800,"y":60},"shiny":{"x":840,"y":60}}}},"ninetales":{".":{".":{"regular":{"x":880,"y":60},"shiny":{"x":920,"y":60}}}},"jigglypuff":{".":{".":{"regular":{"x":960,"y":60},"shiny":{"x":1040,"y":60}},"right":{"regular":{"x":1000,"y":60},"shiny":{"x":1080,"y":60}}}},"wigglytuff":{".":{".":{"regular":{"x":1120,"y":60},"shiny":{"x":1200,"y":60}},"right":{"regular":{"x":1160,"y":60},"shiny":{"x":1240,"y":60}}}},"zubat":{".":{".":{"regular":{"x":0,"y":90},"shiny":{"x":40,"y":90}}}},"golbat":{".":{".":{"regular":{"x":80,"y":90},"shiny":{"x":120,"y":90}}}},"oddish":{".":{".":{"regular":{"x":160,"y":90},"shiny":{"x":200,"y":90}}}},"gloom":{".":{".":{"regular":{"x":240,"y":90},"shiny":{"x":280,"y":90}}}},"vileplume":{".":{".":{"regular":{"x":320,"y":90},"shiny":{"x":360,"y":90}}}},"paras":{".":{".":{"regular":{"x":400,"y":90},"shiny":{"x":440,"y":90}}}},"parasect":{".":{".":{"regular":{"x":480,"y":90},"shiny":{"x":520,"y":90}}}},"venonat":{".":{".":{"regular":{"x":560,"y":90},"shiny":{"x":600,"y":90}}}},"venomoth":{".":{".":{"regular":{"x":640,"y":90},"shiny":{"x":680,"y":90}}}},"diglett":{".":{".":{"regular":{"x":720,"y":90},"shiny":{"x":760,"y":90}}}},"dugtrio":{".":{".":{"regular":{"x":800,"y":90},"shiny":{"x":840,"y":90}}}},"meowth":{".":{".":{"regular":{"x":880,"y":90},"shiny":{"x":920,"y":90}}}},"persian":{".":{".":{"regular":{"x":960,"y":90},"shiny":{"x":1000,"y":90}}}},"psyduck":{".":{".":{"regular":{"x":1040,"y":90},"shiny":{"x":1080,"y":90}}}},"golduck":{".":{".":{"regular":{"x":1120,"y":90},"shiny":{"x":1160,"y":90}}}},"mankey":{".":{".":{"regular":{"x":1200,"y":90},"shiny":{"x":1240,"y":90}}}},"primeape":{".":{".":{"regular":{"x":0,"y":120},"shiny":{"x":40,"y":120}}}},"growlithe":{".":{".":{"regular":{"x":80,"y":120},"shiny":{"x":120,"y":120}}}},"arcanine":{".":{".":{"regular":{"x":160,"y":120},"shiny":{"x":200,"y":120}}}},"poliwag":{".":{".":{"regular":{"x":240,"y":120},"shiny":{"x":280,"y":120}}}},"poliwhirl":{".":{".":{"regular":{"x":320,"y":120},"shiny":{"x":400,"y":120}},"right":{"regular":{"x":360,"y":120},"shiny":{"x":440,"y":120}}}},"poliwrath":{".":{".":{"regular":{"x":480,"y":120},"shiny":{"x":560,"y":120}},"right":{"regular":{"x":520,"y":120},"shiny":{"x":600,"y":120}}}},"abra":{".":{".":{"regular":{"x":640,"y":120},"shiny":{"x":680,"y":120}}}},"kadabra":{".":{".":{"regular":{"x":720,"y":120},"shiny":{"x":760,"y":120}}}},"alakazam":{".":{".":{"regular":{"x":800,"y":120},"shiny":{"x":840,"y":120}}},"mega":{".":{"regular":{"x":880,"y":120},"shiny":{"x":920,"y":120}}}},"machop":{".":{".":{"regular":{"x":960,"y":120},"shiny":{"x":1000,"y":120}}}},"machoke":{".":{".":{"regular":{"x":1040,"y":120},"shiny":{"x":1080,"y":120}}}},"machamp":{".":{".":{"regular":{"x":1120,"y":120},"shiny":{"x":1160,"y":120}}}},"bellsprout":{".":{".":{"regular":{"x":1200,"y":120},"shiny":{"x":1240,"y":120}}}},"weepinbell":{".":{".":{"regular":{"x":0,"y":150},"shiny":{"x":40,"y":150}}}},"victreebel":{".":{".":{"regular":{"x":80,"y":150},"shiny":{"x":120,"y":150}}}},"tentacool":{".":{".":{"regular":{"x":160,"y":150},"shiny":{"x":200,"y":150}}}},"tentacruel":{".":{".":{"regular":{"x":240,"y":150},"shiny":{"x":280,"y":150}}}},"geodude":{".":{".":{"regular":{"x":320,"y":150},"shiny":{"x":360,"y":150}}}},"graveler":{".":{".":{"regular":{"x":400,"y":150},"shiny":{"x":440,"y":150}}}},"golem":{".":{".":{"regular":{"x":480,"y":150},"shiny":{"x":520,"y":150}}}},"ponyta":{".":{".":{"regular":{"x":560,"y":150},"shiny":{"x":600,"y":150}}}},"rapidash":{".":{".":{"regular":{"x":640,"y":150},"shiny":{"x":680,"y":150}}}},"slowpoke":{".":{".":{"regular":{"x":720,"y":150},"shiny":{"x":760,"y":150}}}},"slowbro":{".":{".":{"regular":{"x":800,"y":150},"shiny":{"x":840,"y":150}}}},"magnemite":{".":{".":{"regular":{"x":880,"y":150},"shiny":{"x":920,"y":150}}}},"magneton":{".":{".":{"regular":{"x":960,"y":150},"shiny":{"x":1000,"y":150}}}},"farfetchd":{".":{".":{"regular":{"x":1040,"y":150},"shiny":{"x":1080,"y":150}}}},"doduo":{".":{".":{"regular":{"x":1120,"y":150},"shiny":{"x":1160,"y":150}}}},"dodrio":{".":{".":{"regular":{"x":1200,"y":150},"shiny":{"x":1240,"y":150}}}},"seel":{".":{".":{"regular":{"x":0,"y":180},"shiny":{"x":40,"y":180}}}},"dewgong":{".":{".":{"regular":{"x":80,"y":180},"shiny":{"x":120,"y":180}}}},"grimer":{".":{".":{"regular":{"x":160,"y":180},"shiny":{"x":200,"y":180}}}},"muk":{".":{".":{"regular":{"x":240,"y":180},"shiny":{"x":280,"y":180}}}},"shellder":{".":{".":{"regular":{"x":320,"y":180},"shiny":{"x":360,"y":180}}}},"cloyster":{".":{".":{"regular":{"x":400,"y":180},"shiny":{"x":440,"y":180}}}},"gastly":{".":{".":{"regular":{"x":480,"y":180},"shiny":{"x":520,"y":180}}}},"haunter":{".":{".":{"regular":{"x":560,"y":180},"shiny":{"x":600,"y":180}}}},"gengar":{".":{".":{"regular":{"x":640,"y":180},"shiny":{"x":680,"y":180}}},"mega":{".":{"regular":{"x":720,"y":180},"shiny":{"x":760,"y":180}}}},"onix":{".":{".":{"regular":{"x":800,"y":180},"shiny":{"x":840,"y":180}}}},"drowzee":{".":{".":{"regular":{"x":880,"y":180},"shiny":{"x":920,"y":180}}}},"hypno":{".":{".":{"regular":{"x":960,"y":180},"shiny":{"x":1000,"y":180}}}},"krabby":{".":{".":{"regular":{"x":1040,"y":180},"shiny":{"x":1080,"y":180}}}},"kingler":{".":{".":{"regular":{"x":1120,"y":180},"shiny":{"x":1200,"y":180}},"right":{"regular":{"x":1160,"y":180},"shiny":{"x":1240,"y":180}}}},"voltorb":{".":{".":{"regular":{"x":0,"y":210},"shiny":{"x":40,"y":210}}}},"electrode":{".":{".":{"regular":{"x":80,"y":210},"shiny":{"x":120,"y":210}}}},"exeggcute":{".":{".":{"regular":{"x":160,"y":210},"shiny":{"x":200,"y":210}}}},"exeggutor":{".":{".":{"regular":{"x":240,"y":210},"shiny":{"x":280,"y":210}}}},"cubone":{".":{".":{"regular":{"x":320,"y":210},"shiny":{"x":360,"y":210}}}},"marowak":{".":{".":{"regular":{"x":400,"y":210},"shiny":{"x":440,"y":210}}}},"hitmonlee":{".":{".":{"regular":{"x":480,"y":210},"shiny":{"x":520,"y":210}}}},"hitmonchan":{".":{".":{"regular":{"x":560,"y":210},"shiny":{"x":600,"y":210}}}},"lickitung":{".":{".":{"regular":{"x":640,"y":210},"shiny":{"x":680,"y":210}}}},"koffing":{".":{".":{"regular":{"x":720,"y":210},"shiny":{"x":760,"y":210}}}},"weezing":{".":{".":{"regular":{"x":800,"y":210},"shiny":{"x":840,"y":210}}}},"rhyhorn":{".":{".":{"regular":{"x":880,"y":210},"shiny":{"x":920,"y":210}}}},"rhydon":{".":{".":{"regular":{"x":960,"y":210},"shiny":{"x":1000,"y":210}}}},"chansey":{".":{".":{"regular":{"x":1040,"y":210},"shiny":{"x":1080,"y":210}}}},"tangela":{".":{".":{"regular":{"x":1120,"y":210},"shiny":{"x":1160,"y":210}}}},"kangaskhan":{".":{".":{"regular":{"x":1200,"y":210},"shiny":{"x":1240,"y":210}}},"mega":{".":{"regular":{"x":0,"y":240},"shiny":{"x":40,"y":240}}}},"horsea":{".":{".":{"regular":{"x":80,"y":240},"shiny":{"x":120,"y":240}}}},"seadra":{".":{".":{"regular":{"x":160,"y":240},"shiny":{"x":200,"y":240}}}},"goldeen":{".":{".":{"regular":{"x":240,"y":240},"shiny":{"x":280,"y":240}}}},"seaking":{".":{".":{"regular":{"x":320,"y":240},"shiny":{"x":360,"y":240}}}},"staryu":{".":{".":{"regular":{"x":400,"y":240},"shiny":{"x":440,"y":240}}}},"starmie":{".":{".":{"regular":{"x":480,"y":240},"shiny":{"x":520,"y":240}}}},"mr-mime":{".":{".":{"regular":{"x":560,"y":240},"shiny":{"x":600,"y":240}}}},"scyther":{".":{".":{"regular":{"x":640,"y":240},"shiny":{"x":680,"y":240}}}},"jynx":{".":{".":{"regular":{"x":720,"y":240},"shiny":{"x":760,"y":240}}}},"electabuzz":{".":{".":{"regular":{"x":800,"y":240},"shiny":{"x":840,"y":240}}}},"magmar":{".":{".":{"regular":{"x":880,"y":240},"shiny":{"x":920,"y":240}}}},"pinsir":{".":{".":{"regular":{"x":960,"y":240},"shiny":{"x":1000,"y":240}}},"mega":{".":{"regular":{"x":1040,"y":240},"shiny":{"x":1080,"y":240}}}},"tauros":{".":{".":{"regular":{"x":1120,"y":240},"shiny":{"x":1160,"y":240}}}},"magikarp":{".":{".":{"regular":{"x":1200,"y":240},"shiny":{"x":1240,"y":240}}}},"gyarados":{".":{".":{"regular":{"x":0,"y":270},"shiny":{"x":40,"y":270}}},"mega":{".":{"regular":{"x":80,"y":270},"shiny":{"x":120,"y":270}}}},"lapras":{".":{".":{"regular":{"x":160,"y":270},"shiny":{"x":200,"y":270}}}},"ditto":{".":{".":{"regular":{"x":240,"y":270},"shiny":{"x":280,"y":270}}}},"eevee":{".":{".":{"regular":{"x":320,"y":270},"shiny":{"x":360,"y":270}}}},"vaporeon":{".":{".":{"regular":{"x":400,"y":270},"shiny":{"x":440,"y":270}}}},"jolteon":{".":{".":{"regular":{"x":480,"y":270},"shiny":{"x":520,"y":270}}}},"flareon":{".":{".":{"regular":{"x":560,"y":270},"shiny":{"x":600,"y":270}}}},"porygon":{".":{".":{"regular":{"x":640,"y":270},"shiny":{"x":680,"y":270}}}},"omanyte":{".":{".":{"regular":{"x":720,"y":270},"shiny":{"x":760,"y":270}}}},"omastar":{".":{".":{"regular":{"x":800,"y":270},"shiny":{"x":840,"y":270}}}},"kabuto":{".":{".":{"regular":{"x":880,"y":270},"shiny":{"x":920,"y":270}}}},"kabutops":{".":{".":{"regular":{"x":960,"y":270},"shiny":{"x":1000,"y":270}}}},"aerodactyl":{".":{".":{"regular":{"x":1040,"y":270},"shiny":{"x":1080,"y":270}}},"mega":{".":{"regular":{"x":1120,"y":270},"shiny":{"x":1160,"y":270}}}},"snorlax":{".":{".":{"regular":{"x":1200,"y":270},"shiny":{"x":1240,"y":270}}}},"articuno":{".":{".":{"regular":{"x":0,"y":300},"shiny":{"x":40,"y":300}}}},"zapdos":{".":{".":{"regular":{"x":80,"y":300},"shiny":{"x":120,"y":300}}}},"moltres":{".":{".":{"regular":{"x":160,"y":300},"shiny":{"x":200,"y":300}}}},"dratini":{".":{".":{"regular":{"x":240,"y":300},"shiny":{"x":280,"y":300}}}},"dragonair":{".":{".":{"regular":{"x":320,"y":300},"shiny":{"x":360,"y":300}}}},"dragonite":{".":{".":{"regular":{"x":400,"y":300},"shiny":{"x":440,"y":300}}}},"mewtwo":{".":{".":{"regular":{"x":480,"y":300},"shiny":{"x":520,"y":300}}},"mega-x":{".":{"regular":{"x":560,"y":300},"shiny":{"x":600,"y":300}}},"mega-y":{".":{"regular":{"x":640,"y":300},"shiny":{"x":680,"y":300}}}},"mew":{".":{".":{"regular":{"x":720,"y":300},"shiny":{"x":760,"y":300}}}},"chikorita":{".":{".":{"regular":{"x":800,"y":300},"shiny":{"x":840,"y":300}}}},"bayleef":{".":{".":{"regular":{"x":880,"y":300},"shiny":{"x":920,"y":300}}}},"meganium":{".":{".":{"regular":{"x":960,"y":300},"shiny":{"x":1000,"y":300}}}},"cyndaquil":{".":{".":{"regular":{"x":1040,"y":300},"shiny":{"x":1080,"y":300}}}},"quilava":{".":{".":{"regular":{"x":1120,"y":300},"shiny":{"x":1160,"y":300}}}},"typhlosion":{".":{".":{"regular":{"x":1200,"y":300},"shiny":{"x":1240,"y":300}}}},"totodile":{".":{".":{"regular":{"x":0,"y":330},"shiny":{"x":40,"y":330}}}},"croconaw":{".":{".":{"regular":{"x":80,"y":330},"shiny":{"x":160,"y":330}},"right":{"regular":{"x":120,"y":330},"shiny":{"x":200,"y":330}}}},"feraligatr":{".":{".":{"regular":{"x":240,"y":330},"shiny":{"x":280,"y":330}}}},"sentret":{".":{".":{"regular":{"x":320,"y":330},"shiny":{"x":360,"y":330}}}},"furret":{".":{".":{"regular":{"x":400,"y":330},"shiny":{"x":440,"y":330}}}},"hoothoot":{".":{".":{"regular":{"x":480,"y":330},"shiny":{"x":520,"y":330}}}},"noctowl":{".":{".":{"regular":{"x":560,"y":330},"shiny":{"x":600,"y":330}}}},"ledyba":{".":{".":{"regular":{"x":640,"y":330},"shiny":{"x":680,"y":330}}}},"ledian":{".":{".":{"regular":{"x":720,"y":330},"shiny":{"x":760,"y":330}}}},"spinarak":{".":{".":{"regular":{"x":800,"y":330},"shiny":{"x":840,"y":330}}}},"ariados":{".":{".":{"regular":{"x":880,"y":330},"shiny":{"x":920,"y":330}}}},"crobat":{".":{".":{"regular":{"x":960,"y":330},"shiny":{"x":1000,"y":330}}}},"chinchou":{".":{".":{"regular":{"x":1040,"y":330},"shiny":{"x":1080,"y":330}}}},"lanturn":{".":{".":{"regular":{"x":1120,"y":330},"shiny":{"x":1160,"y":330}}}},"pichu":{".":{".":{"regular":{"x":1200,"y":330},"shiny":{"x":1240,"y":330}}}},"cleffa":{".":{".":{"regular":{"x":0,"y":360},"shiny":{"x":80,"y":360}},"right":{"regular":{"x":40,"y":360},"shiny":{"x":120,"y":360}}}},"igglybuff":{".":{".":{"regular":{"x":160,"y":360},"shiny":{"x":240,"y":360}},"right":{"regular":{"x":200,"y":360},"shiny":{"x":280,"y":360}}}},"togepi":{".":{".":{"regular":{"x":320,"y":360},"shiny":{"x":360,"y":360}}}},"togetic":{".":{".":{"regular":{"x":400,"y":360},"shiny":{"x":440,"y":360}}}},"natu":{".":{".":{"regular":{"x":480,"y":360},"shiny":{"x":520,"y":360}}}},"xatu":{".":{".":{"regular":{"x":560,"y":360},"shiny":{"x":600,"y":360}}}},"mareep":{".":{".":{"regular":{"x":640,"y":360},"shiny":{"x":680,"y":360}}}},"flaaffy":{".":{".":{"regular":{"x":720,"y":360},"shiny":{"x":760,"y":360}}}},"ampharos":{".":{".":{"regular":{"x":800,"y":360},"shiny":{"x":840,"y":360}}},"mega":{".":{"regular":{"x":880,"y":360},"shiny":{"x":920,"y":360}}}},"bellossom":{".":{".":{"regular":{"x":960,"y":360},"shiny":{"x":1000,"y":360}}}},"marill":{".":{".":{"regular":{"x":1040,"y":360},"shiny":{"x":1080,"y":360}}}},"azumarill":{".":{".":{"regular":{"x":1120,"y":360},"shiny":{"x":1160,"y":360}}}},"sudowoodo":{".":{".":{"regular":{"x":1200,"y":360},"shiny":{"x":1240,"y":360}}}},"politoed":{".":{".":{"regular":{"x":0,"y":390},"shiny":{"x":80,"y":390}},"right":{"regular":{"x":40,"y":390},"shiny":{"x":120,"y":390}}}},"hoppip":{".":{".":{"regular":{"x":160,"y":390},"shiny":{"x":200,"y":390}}}},"skiploom":{".":{".":{"regular":{"x":240,"y":390},"shiny":{"x":280,"y":390}}}},"jumpluff":{".":{".":{"regular":{"x":320,"y":390},"shiny":{"x":360,"y":390}}}},"aipom":{".":{".":{"regular":{"x":400,"y":390},"shiny":{"x":440,"y":390}}}},"sunkern":{".":{".":{"regular":{"x":480,"y":390},"shiny":{"x":520,"y":390}}}},"sunflora":{".":{".":{"regular":{"x":560,"y":390},"shiny":{"x":600,"y":390}}}},"yanma":{".":{".":{"regular":{"x":640,"y":390},"shiny":{"x":680,"y":390}}}},"wooper":{".":{".":{"regular":{"x":720,"y":390},"shiny":{"x":760,"y":390}}}},"quagsire":{".":{".":{"regular":{"x":800,"y":390},"shiny":{"x":840,"y":390}}}},"espeon":{".":{".":{"regular":{"x":880,"y":390},"shiny":{"x":920,"y":390}}}},"umbreon":{".":{".":{"regular":{"x":960,"y":390},"shiny":{"x":1000,"y":390}}}},"murkrow":{".":{".":{"regular":{"x":1040,"y":390},"shiny":{"x":1080,"y":390}}}},"slowking":{".":{".":{"regular":{"x":1120,"y":390},"shiny":{"x":1160,"y":390}}}},"misdreavus":{".":{".":{"regular":{"x":1200,"y":390},"shiny":{"x":1240,"y":390}}}},"unown":{".":{".":{"regular":{"x":0,"y":420},"shiny":{"x":40,"y":420}}},"a":{".":{"regular":{"x":0,"y":420},"shiny":{"x":40,"y":420}}},"b":{".":{"regular":{"x":80,"y":420},"shiny":{"x":160,"y":420}},"right":{"regular":{"x":120,"y":420},"shiny":{"x":200,"y":420}}},"c":{".":{"regular":{"x":240,"y":420},"shiny":{"x":320,"y":420}},"right":{"regular":{"x":280,"y":420},"shiny":{"x":360,"y":420}}},"d":{".":{"regular":{"x":400,"y":420},"shiny":{"x":480,"y":420}},"right":{"regular":{"x":440,"y":420},"shiny":{"x":520,"y":420}}},"e":{".":{"regular":{"x":560,"y":420},"shiny":{"x":640,"y":420}},"right":{"regular":{"x":600,"y":420},"shiny":{"x":680,"y":420}}},"exclamation":{".":{"regular":{"x":720,"y":420},"shiny":{"x":760,"y":420}}},"f":{".":{"regular":{"x":800,"y":420},"shiny":{"x":880,"y":420}},"right":{"regular":{"x":840,"y":420},"shiny":{"x":920,"y":420}}},"g":{".":{"regular":{"x":960,"y":420},"shiny":{"x":1040,"y":420}},"right":{"regular":{"x":1000,"y":420},"shiny":{"x":1080,"y":420}}},"h":{".":{"regular":{"x":1120,"y":420},"shiny":{"x":1200,"y":420}},"right":{"regular":{"x":1160,"y":420},"shiny":{"x":1240,"y":420}}},"i":{".":{"regular":{"x":0,"y":450},"shiny":{"x":40,"y":450}}},"j":{".":{"regular":{"x":80,"y":450},"shiny":{"x":160,"y":450}},"right":{"regular":{"x":120,"y":450},"shiny":{"x":200,"y":450}}},"k":{".":{"regular":{"x":240,"y":450},"shiny":{"x":320,"y":450}},"right":{"regular":{"x":280,"y":450},"shiny":{"x":360,"y":450}}},"l":{".":{"regular":{"x":400,"y":450},"shiny":{"x":480,"y":450}},"right":{"regular":{"x":440,"y":450},"shiny":{"x":520,"y":450}}},"m":{".":{"regular":{"x":560,"y":450},"shiny":{"x":640,"y":450}},"right":{"regular":{"x":600,"y":450},"shiny":{"x":680,"y":450}}},"n":{".":{"regular":{"x":720,"y":450},"shiny":{"x":800,"y":450}},"right":{"regular":{"x":760,"y":450},"shiny":{"x":840,"y":450}}},"o":{".":{"regular":{"x":880,"y":450},"shiny":{"x":920,"y":450}}},"p":{".":{"regular":{"x":960,"y":450},"shiny":{"x":1040,"y":450}},"right":{"regular":{"x":1000,"y":450},"shiny":{"x":1080,"y":450}}},"q":{".":{"regular":{"x":1120,"y":450},"shiny":{"x":1200,"y":450}},"right":{"regular":{"x":1160,"y":450},"shiny":{"x":1240,"y":450}}},"question":{".":{"regular":{"x":0,"y":480},"shiny":{"x":80,"y":480}},"right":{"regular":{"x":40,"y":480},"shiny":{"x":120,"y":480}}},"r":{".":{"regular":{"x":160,"y":480},"shiny":{"x":240,"y":480}},"right":{"regular":{"x":200,"y":480},"shiny":{"x":280,"y":480}}},"s":{".":{"regular":{"x":320,"y":480},"shiny":{"x":400,"y":480}},"right":{"regular":{"x":360,"y":480},"shiny":{"x":440,"y":480}}},"t":{".":{"regular":{"x":480,"y":480},"shiny":{"x":560,"y":480}},"right":{"regular":{"x":520,"y":480},"shiny":{"x":600,"y":480}}},"u":{".":{"regular":{"x":640,"y":480},"shiny":{"x":680,"y":480}}},"v":{".":{"regular":{"x":720,"y":480},"shiny":{"x":800,"y":480}},"right":{"regular":{"x":760,"y":480},"shiny":{"x":840,"y":480}}},"w":{".":{"regular":{"x":880,"y":480},"shiny":{"x":920,"y":480}}},"x":{".":{"regular":{"x":960,"y":480},"shiny":{"x":1000,"y":480}}},"y":{".":{"regular":{"x":1040,"y":480},"shiny":{"x":1080,"y":480}}},"z":{".":{"regular":{"x":1120,"y":480},"shiny":{"x":1200,"y":480}},"right":{"regular":{"x":1160,"y":480},"shiny":{"x":1240,"y":480}}}},"wobbuffet":{".":{".":{"regular":{"x":0,"y":510},"shiny":{"x":40,"y":510}}}},"girafarig":{".":{".":{"regular":{"x":80,"y":510},"shiny":{"x":120,"y":510}}}},"pineco":{".":{".":{"regular":{"x":160,"y":510},"shiny":{"x":200,"y":510}}}},"forretress":{".":{".":{"regular":{"x":240,"y":510},"shiny":{"x":280,"y":510}}}},"dunsparce":{".":{".":{"regular":{"x":320,"y":510},"shiny":{"x":360,"y":510}}}},"gligar":{".":{".":{"regular":{"x":400,"y":510},"shiny":{"x":440,"y":510}}}},"steelix":{".":{".":{"regular":{"x":480,"y":510},"shiny":{"x":520,"y":510}}}},"snubbull":{".":{".":{"regular":{"x":560,"y":510},"shiny":{"x":600,"y":510}}}},"granbull":{".":{".":{"regular":{"x":640,"y":510},"shiny":{"x":680,"y":510}}}},"qwilfish":{".":{".":{"regular":{"x":720,"y":510},"shiny":{"x":760,"y":510}}}},"scizor":{".":{".":{"regular":{"x":800,"y":510},"shiny":{"x":840,"y":510}}},"mega":{".":{"regular":{"x":880,"y":510},"shiny":{"x":920,"y":510}}}},"shuckle":{".":{".":{"regular":{"x":960,"y":510},"shiny":{"x":1000,"y":510}}}},"heracross":{".":{".":{"regular":{"x":1040,"y":510},"shiny":{"x":1080,"y":510}}},"mega":{".":{"regular":{"x":1120,"y":510},"shiny":{"x":1160,"y":510}}}},"sneasel":{".":{".":{"regular":{"x":1200,"y":510},"shiny":{"x":0,"y":540}},"right":{"regular":{"x":1240,"y":510},"shiny":{"x":40,"y":540}}}},"teddiursa":{".":{".":{"regular":{"x":80,"y":540},"shiny":{"x":160,"y":540}},"right":{"regular":{"x":120,"y":540},"shiny":{"x":200,"y":540}}}},"ursaring":{".":{".":{"regular":{"x":240,"y":540},"shiny":{"x":280,"y":540}}}},"slugma":{".":{".":{"regular":{"x":320,"y":540},"shiny":{"x":360,"y":540}}}},"magcargo":{".":{".":{"regular":{"x":400,"y":540},"shiny":{"x":440,"y":540}}}},"swinub":{".":{".":{"regular":{"x":480,"y":540},"shiny":{"x":520,"y":540}}}},"piloswine":{".":{".":{"regular":{"x":560,"y":540},"shiny":{"x":600,"y":540}}}},"corsola":{".":{".":{"regular":{"x":640,"y":540},"shiny":{"x":680,"y":540}}}},"remoraid":{".":{".":{"regular":{"x":720,"y":540},"shiny":{"x":760,"y":540}}}},"octillery":{".":{".":{"regular":{"x":800,"y":540},"shiny":{"x":840,"y":540}}}},"delibird":{".":{".":{"regular":{"x":880,"y":540},"shiny":{"x":920,"y":540}}}},"mantine":{".":{".":{"regular":{"x":960,"y":540},"shiny":{"x":1000,"y":540}}}},"skarmory":{".":{".":{"regular":{"x":1040,"y":540},"shiny":{"x":1080,"y":540}}}},"houndour":{".":{".":{"regular":{"x":1120,"y":540},"shiny":{"x":1160,"y":540}}}},"houndoom":{".":{".":{"regular":{"x":1200,"y":540},"shiny":{"x":1240,"y":540}}},"mega":{".":{"regular":{"x":0,"y":570},"shiny":{"x":40,"y":570}}}},"kingdra":{".":{".":{"regular":{"x":80,"y":570},"shiny":{"x":120,"y":570}}}},"phanpy":{".":{".":{"regular":{"x":160,"y":570},"shiny":{"x":200,"y":570}}}},"donphan":{".":{".":{"regular":{"x":240,"y":570},"shiny":{"x":280,"y":570}}}},"porygon2":{".":{".":{"regular":{"x":320,"y":570},"shiny":{"x":360,"y":570}}}},"stantler":{".":{".":{"regular":{"x":400,"y":570},"shiny":{"x":440,"y":570}}}},"smeargle":{".":{".":{"regular":{"x":480,"y":570},"shiny":{"x":520,"y":570}}}},"tyrogue":{".":{".":{"regular":{"x":560,"y":570},"shiny":{"x":600,"y":570}}}},"hitmontop":{".":{".":{"regular":{"x":640,"y":570},"shiny":{"x":680,"y":570}}}},"smoochum":{".":{".":{"regular":{"x":720,"y":570},"shiny":{"x":760,"y":570}}}},"elekid":{".":{".":{"regular":{"x":800,"y":570},"shiny":{"x":840,"y":570}}}},"magby":{".":{".":{"regular":{"x":880,"y":570},"shiny":{"x":920,"y":570}}}},"miltank":{".":{".":{"regular":{"x":960,"y":570},"shiny":{"x":1000,"y":570}}}},"blissey":{".":{".":{"regular":{"x":1040,"y":570},"shiny":{"x":1080,"y":570}}}},"raikou":{".":{".":{"regular":{"x":1120,"y":570},"shiny":{"x":1160,"y":570}}}},"entei":{".":{".":{"regular":{"x":1200,"y":570},"shiny":{"x":1240,"y":570}}}},"suicune":{".":{".":{"regular":{"x":0,"y":600},"shiny":{"x":40,"y":600}}}},"larvitar":{".":{".":{"regular":{"x":80,"y":600},"shiny":{"x":120,"y":600}}}},"pupitar":{".":{".":{"regular":{"x":160,"y":600},"shiny":{"x":200,"y":600}}}},"tyranitar":{".":{".":{"regular":{"x":240,"y":600},"shiny":{"x":280,"y":600}}},"mega":{".":{"regular":{"x":320,"y":600},"shiny":{"x":360,"y":600}}}},"lugia":{".":{".":{"regular":{"x":400,"y":600},"shiny":{"x":440,"y":600}}}},"ho-oh":{".":{".":{"regular":{"x":480,"y":600},"shiny":{"x":520,"y":600}}}},"celebi":{".":{".":{"regular":{"x":560,"y":600},"shiny":{"x":600,"y":600}}}},"treecko":{".":{".":{"regular":{"x":640,"y":600},"shiny":{"x":680,"y":600}}}},"grovyle":{".":{".":{"regular":{"x":720,"y":600},"shiny":{"x":760,"y":600}}}},"sceptile":{".":{".":{"regular":{"x":800,"y":600},"shiny":{"x":840,"y":600}}}},"torchic":{".":{".":{"regular":{"x":880,"y":600},"shiny":{"x":920,"y":600}}}},"combusken":{".":{".":{"regular":{"x":960,"y":600},"shiny":{"x":1000,"y":600}}}},"blaziken":{".":{".":{"regular":{"x":1040,"y":600},"shiny":{"x":1080,"y":600}}},"mega":{".":{"regular":{"x":1120,"y":600},"shiny":{"x":1160,"y":600}}}},"mudkip":{".":{".":{"regular":{"x":1200,"y":600},"shiny":{"x":1240,"y":600}}}},"marshtomp":{".":{".":{"regular":{"x":0,"y":630},"shiny":{"x":40,"y":630}}}},"swampert":{".":{".":{"regular":{"x":80,"y":630},"shiny":{"x":120,"y":630}}}},"poochyena":{".":{".":{"regular":{"x":160,"y":630},"shiny":{"x":200,"y":630}}}},"mightyena":{".":{".":{"regular":{"x":240,"y":630},"shiny":{"x":280,"y":630}}}},"zigzagoon":{".":{".":{"regular":{"x":320,"y":630},"shiny":{"x":360,"y":630}}}},"linoone":{".":{".":{"regular":{"x":400,"y":630},"shiny":{"x":440,"y":630}}}},"wurmple":{".":{".":{"regular":{"x":480,"y":630},"shiny":{"x":520,"y":630}}}},"silcoon":{".":{".":{"regular":{"x":560,"y":630},"shiny":{"x":600,"y":630}}}},"beautifly":{".":{".":{"regular":{"x":640,"y":630},"shiny":{"x":680,"y":630}}}},"cascoon":{".":{".":{"regular":{"x":720,"y":630},"shiny":{"x":760,"y":630}}}},"dustox":{".":{".":{"regular":{"x":800,"y":630},"shiny":{"x":840,"y":630}}}},"lotad":{".":{".":{"regular":{"x":880,"y":630},"shiny":{"x":920,"y":630}}}},"lombre":{".":{".":{"regular":{"x":960,"y":630},"shiny":{"x":1000,"y":630}}}},"ludicolo":{".":{".":{"regular":{"x":1040,"y":630},"shiny":{"x":1080,"y":630}}}},"seedot":{".":{".":{"regular":{"x":1120,"y":630},"shiny":{"x":1160,"y":630}}}},"nuzleaf":{".":{".":{"regular":{"x":1200,"y":630},"shiny":{"x":1240,"y":630}}}},"shiftry":{".":{".":{"regular":{"x":0,"y":660},"shiny":{"x":40,"y":660}}}},"taillow":{".":{".":{"regular":{"x":80,"y":660},"shiny":{"x":120,"y":660}}}},"swellow":{".":{".":{"regular":{"x":160,"y":660},"shiny":{"x":200,"y":660}}}},"wingull":{".":{".":{"regular":{"x":240,"y":660},"shiny":{"x":280,"y":660}}}},"pelipper":{".":{".":{"regular":{"x":320,"y":660},"shiny":{"x":360,"y":660}}}},"ralts":{".":{".":{"regular":{"x":400,"y":660},"shiny":{"x":440,"y":660}}}},"kirlia":{".":{".":{"regular":{"x":480,"y":660},"shiny":{"x":520,"y":660}}}},"gardevoir":{".":{".":{"regular":{"x":560,"y":660},"shiny":{"x":600,"y":660}}},"mega":{".":{"regular":{"x":640,"y":660},"shiny":{"x":680,"y":660}}}},"surskit":{".":{".":{"regular":{"x":720,"y":660},"shiny":{"x":760,"y":660}}}},"masquerain":{".":{".":{"regular":{"x":800,"y":660},"shiny":{"x":840,"y":660}}}},"shroomish":{".":{".":{"regular":{"x":880,"y":660},"shiny":{"x":920,"y":660}}}},"breloom":{".":{".":{"regular":{"x":960,"y":660},"shiny":{"x":1000,"y":660}}}},"slakoth":{".":{".":{"regular":{"x":1040,"y":660},"shiny":{"x":1080,"y":660}}}},"vigoroth":{".":{".":{"regular":{"x":1120,"y":660},"shiny":{"x":1160,"y":660}}}},"slaking":{".":{".":{"regular":{"x":1200,"y":660},"shiny":{"x":1240,"y":660}}}},"nincada":{".":{".":{"regular":{"x":0,"y":690},"shiny":{"x":40,"y":690}}}},"ninjask":{".":{".":{"regular":{"x":80,"y":690},"shiny":{"x":120,"y":690}}}},"shedinja":{".":{".":{"regular":{"x":160,"y":690},"shiny":{"x":200,"y":690}}}},"whismur":{".":{".":{"regular":{"x":240,"y":690},"shiny":{"x":280,"y":690}}}},"loudred":{".":{".":{"regular":{"x":320,"y":690},"shiny":{"x":360,"y":690}}}},"exploud":{".":{".":{"regular":{"x":400,"y":690},"shiny":{"x":440,"y":690}}}},"makuhita":{".":{".":{"regular":{"x":480,"y":690},"shiny":{"x":520,"y":690}}}},"hariyama":{".":{".":{"regular":{"x":560,"y":690},"shiny":{"x":600,"y":690}}}},"azurill":{".":{".":{"regular":{"x":640,"y":690},"shiny":{"x":680,"y":690}}}},"nosepass":{".":{".":{"regular":{"x":720,"y":690},"shiny":{"x":760,"y":690}}}},"skitty":{".":{".":{"regular":{"x":800,"y":690},"shiny":{"x":840,"y":690}}}},"delcatty":{".":{".":{"regular":{"x":880,"y":690},"shiny":{"x":920,"y":690}}}},"sableye":{".":{".":{"regular":{"x":960,"y":690},"shiny":{"x":1000,"y":690}}}},"mawile":{".":{".":{"regular":{"x":1040,"y":690},"shiny":{"x":1080,"y":690}}},"mega":{".":{"regular":{"x":1120,"y":690},"shiny":{"x":1160,"y":690}}}},"aron":{".":{".":{"regular":{"x":1200,"y":690},"shiny":{"x":1240,"y":690}}}},"lairon":{".":{".":{"regular":{"x":0,"y":720},"shiny":{"x":40,"y":720}}}},"aggron":{".":{".":{"regular":{"x":80,"y":720},"shiny":{"x":120,"y":720}}},"mega":{".":{"regular":{"x":160,"y":720},"shiny":{"x":200,"y":720}}}},"meditite":{".":{".":{"regular":{"x":240,"y":720},"shiny":{"x":280,"y":720}}}},"medicham":{".":{".":{"regular":{"x":320,"y":720},"shiny":{"x":360,"y":720}}},"mega":{".":{"regular":{"x":400,"y":720},"shiny":{"x":440,"y":720}}}},"electrike":{".":{".":{"regular":{"x":480,"y":720},"shiny":{"x":520,"y":720}}}},"manectric":{".":{".":{"regular":{"x":560,"y":720},"shiny":{"x":600,"y":720}}},"mega":{".":{"regular":{"x":640,"y":720},"shiny":{"x":680,"y":720}}}},"plusle":{".":{".":{"regular":{"x":720,"y":720},"shiny":{"x":760,"y":720}}}},"minun":{".":{".":{"regular":{"x":800,"y":720},"shiny":{"x":840,"y":720}}}},"volbeat":{".":{".":{"regular":{"x":880,"y":720},"shiny":{"x":920,"y":720}}}},"illumise":{".":{".":{"regular":{"x":960,"y":720},"shiny":{"x":1000,"y":720}}}},"roselia":{".":{".":{"regular":{"x":1040,"y":720},"shiny":{"x":1120,"y":720}},"right":{"regular":{"x":1080,"y":720},"shiny":{"x":1160,"y":720}}}},"gulpin":{".":{".":{"regular":{"x":1200,"y":720},"shiny":{"x":1240,"y":720}}}},"swalot":{".":{".":{"regular":{"x":0,"y":750},"shiny":{"x":40,"y":750}}}},"carvanha":{".":{".":{"regular":{"x":80,"y":750},"shiny":{"x":120,"y":750}}}},"sharpedo":{".":{".":{"regular":{"x":160,"y":750},"shiny":{"x":200,"y":750}}}},"wailmer":{".":{".":{"regular":{"x":240,"y":750},"shiny":{"x":280,"y":750}}}},"wailord":{".":{".":{"regular":{"x":320,"y":750},"shiny":{"x":360,"y":750}}}},"numel":{".":{".":{"regular":{"x":400,"y":750},"shiny":{"x":440,"y":750}}}},"camerupt":{".":{".":{"regular":{"x":480,"y":750},"shiny":{"x":520,"y":750}}}},"torkoal":{".":{".":{"regular":{"x":560,"y":750},"shiny":{"x":600,"y":750}}}},"spoink":{".":{".":{"regular":{"x":640,"y":750},"shiny":{"x":680,"y":750}}}},"grumpig":{".":{".":{"regular":{"x":720,"y":750},"shiny":{"x":760,"y":750}}}},"spinda":{".":{".":{"regular":{"x":800,"y":750},"shiny":{"x":840,"y":750}}}},"trapinch":{".":{".":{"regular":{"x":880,"y":750},"shiny":{"x":920,"y":750}}}},"vibrava":{".":{".":{"regular":{"x":960,"y":750},"shiny":{"x":1000,"y":750}}}},"flygon":{".":{".":{"regular":{"x":1040,"y":750},"shiny":{"x":1080,"y":750}}}},"cacnea":{".":{".":{"regular":{"x":1120,"y":750},"shiny":{"x":1160,"y":750}}}},"cacturne":{".":{".":{"regular":{"x":1200,"y":750},"shiny":{"x":1240,"y":750}}}},"swablu":{".":{".":{"regular":{"x":0,"y":780},"shiny":{"x":40,"y":780}}}},"altaria":{".":{".":{"regular":{"x":80,"y":780},"shiny":{"x":120,"y":780}}}},"zangoose":{".":{".":{"regular":{"x":160,"y":780},"shiny":{"x":240,"y":780}},"right":{"regular":{"x":200,"y":780},"shiny":{"x":280,"y":780}}}},"seviper":{".":{".":{"regular":{"x":320,"y":780},"shiny":{"x":400,"y":780}},"right":{"regular":{"x":360,"y":780},"shiny":{"x":440,"y":780}}}},"lunatone":{".":{".":{"regular":{"x":480,"y":780},"shiny":{"x":520,"y":780}}}},"solrock":{".":{".":{"regular":{"x":560,"y":780},"shiny":{"x":600,"y":780}}}},"barboach":{".":{".":{"regular":{"x":640,"y":780},"shiny":{"x":680,"y":780}}}},"whiscash":{".":{".":{"regular":{"x":720,"y":780},"shiny":{"x":760,"y":780}}}},"corphish":{".":{".":{"regular":{"x":800,"y":780},"shiny":{"x":840,"y":780}}}},"crawdaunt":{".":{".":{"regular":{"x":880,"y":780},"shiny":{"x":920,"y":780}}}},"baltoy":{".":{".":{"regular":{"x":960,"y":780},"shiny":{"x":1000,"y":780}}}},"claydol":{".":{".":{"regular":{"x":1040,"y":780},"shiny":{"x":1080,"y":780}}}},"lileep":{".":{".":{"regular":{"x":1120,"y":780},"shiny":{"x":1160,"y":780}}}},"cradily":{".":{".":{"regular":{"x":1200,"y":780},"shiny":{"x":1240,"y":780}}}},"anorith":{".":{".":{"regular":{"x":0,"y":810},"shiny":{"x":40,"y":810}}}},"armaldo":{".":{".":{"regular":{"x":80,"y":810},"shiny":{"x":120,"y":810}}}},"feebas":{".":{".":{"regular":{"x":160,"y":810},"shiny":{"x":200,"y":810}}}},"milotic":{".":{".":{"regular":{"x":240,"y":810},"shiny":{"x":280,"y":810}}}},"castform":{".":{".":{"regular":{"x":320,"y":810},"shiny":{"x":360,"y":810}}},"rainy":{".":{"regular":{"x":400,"y":810},"shiny":{"x":440,"y":810}}},"snowy":{".":{"regular":{"x":480,"y":810},"shiny":{"x":560,"y":810}},"right":{"regular":{"x":520,"y":810},"shiny":{"x":600,"y":810}}},"sunny":{".":{"regular":{"x":640,"y":810},"shiny":{"x":680,"y":810}}}},"kecleon":{".":{".":{"regular":{"x":720,"y":810},"shiny":{"x":760,"y":810}}}},"shuppet":{".":{".":{"regular":{"x":800,"y":810},"shiny":{"x":840,"y":810}}}},"banette":{".":{".":{"regular":{"x":880,"y":810},"shiny":{"x":920,"y":810}}},"mega":{".":{"regular":{"x":960,"y":810},"shiny":{"x":1000,"y":810}}}},"duskull":{".":{".":{"regular":{"x":1040,"y":810},"shiny":{"x":1080,"y":810}}}},"dusclops":{".":{".":{"regular":{"x":1120,"y":810},"shiny":{"x":1160,"y":810}}}},"tropius":{".":{".":{"regular":{"x":1200,"y":810},"shiny":{"x":1240,"y":810}}}},"chimecho":{".":{".":{"regular":{"x":0,"y":840},"shiny":{"x":40,"y":840}}}},"absol":{".":{".":{"regular":{"x":80,"y":840},"shiny":{"x":160,"y":840}},"right":{"regular":{"x":120,"y":840},"shiny":{"x":200,"y":840}}},"mega":{".":{"regular":{"x":240,"y":840},"shiny":{"x":320,"y":840}},"right":{"regular":{"x":280,"y":840},"shiny":{"x":360,"y":840}}}},"wynaut":{".":{".":{"regular":{"x":400,"y":840},"shiny":{"x":440,"y":840}}}},"snorunt":{".":{".":{"regular":{"x":480,"y":840},"shiny":{"x":520,"y":840}}}},"glalie":{".":{".":{"regular":{"x":560,"y":840},"shiny":{"x":600,"y":840}}}},"spheal":{".":{".":{"regular":{"x":640,"y":840},"shiny":{"x":680,"y":840}}}},"sealeo":{".":{".":{"regular":{"x":720,"y":840},"shiny":{"x":760,"y":840}}}},"walrein":{".":{".":{"regular":{"x":800,"y":840},"shiny":{"x":840,"y":840}}}},"clamperl":{".":{".":{"regular":{"x":880,"y":840},"shiny":{"x":920,"y":840}}}},"huntail":{".":{".":{"regular":{"x":960,"y":840},"shiny":{"x":1000,"y":840}}}},"gorebyss":{".":{".":{"regular":{"x":1040,"y":840},"shiny":{"x":1080,"y":840}}}},"relicanth":{".":{".":{"regular":{"x":1120,"y":840},"shiny":{"x":1160,"y":840}}}},"luvdisc":{".":{".":{"regular":{"x":1200,"y":840},"shiny":{"x":1240,"y":840}}}},"bagon":{".":{".":{"regular":{"x":0,"y":870},"shiny":{"x":40,"y":870}}}},"shelgon":{".":{".":{"regular":{"x":80,"y":870},"shiny":{"x":120,"y":870}}}},"salamence":{".":{".":{"regular":{"x":160,"y":870},"shiny":{"x":200,"y":870}}}},"beldum":{".":{".":{"regular":{"x":240,"y":870},"shiny":{"x":280,"y":870}}}},"metang":{".":{".":{"regular":{"x":320,"y":870},"shiny":{"x":360,"y":870}}}},"metagross":{".":{".":{"regular":{"x":400,"y":870},"shiny":{"x":440,"y":870}}}},"regirock":{".":{".":{"regular":{"x":480,"y":870},"shiny":{"x":560,"y":870}},"right":{"regular":{"x":520,"y":870},"shiny":{"x":600,"y":870}}}},"regice":{".":{".":{"regular":{"x":640,"y":870},"shiny":{"x":680,"y":870}}}},"registeel":{".":{".":{"regular":{"x":720,"y":870},"shiny":{"x":760,"y":870}}}},"latias":{".":{".":{"regular":{"x":800,"y":870},"shiny":{"x":840,"y":870}}},"mega":{".":{"regular":{"x":880,"y":870},"shiny":{"x":920,"y":870}}}},"latios":{".":{".":{"regular":{"x":960,"y":870},"shiny":{"x":1000,"y":870}}},"mega":{".":{"regular":{"x":1040,"y":870},"shiny":{"x":1080,"y":870}}}},"kyogre":{".":{".":{"regular":{"x":1120,"y":870},"shiny":{"x":1160,"y":870}}}},"groudon":{".":{".":{"regular":{"x":1200,"y":870},"shiny":{"x":1240,"y":870}}}},"rayquaza":{".":{".":{"regular":{"x":0,"y":900},"shiny":{"x":40,"y":900}}}},"jirachi":{".":{".":{"regular":{"x":80,"y":900},"shiny":{"x":120,"y":900}}}},"deoxys":{".":{".":{"regular":{"x":160,"y":900},"shiny":{"x":200,"y":900}}},"attack":{".":{"regular":{"x":240,"y":900},"shiny":{"x":280,"y":900}}},"defense":{".":{"regular":{"x":320,"y":900},"shiny":{"x":360,"y":900}}},"normal":{".":{"regular":{"x":160,"y":900},"shiny":{"x":200,"y":900}}},"speed":{".":{"regular":{"x":400,"y":900},"shiny":{"x":440,"y":900}}}},"turtwig":{".":{".":{"regular":{"x":480,"y":900},"shiny":{"x":520,"y":900}}}},"grotle":{".":{".":{"regular":{"x":560,"y":900},"shiny":{"x":600,"y":900}}}},"torterra":{".":{".":{"regular":{"x":640,"y":900},"shiny":{"x":720,"y":900}},"right":{"regular":{"x":680,"y":900},"shiny":{"x":760,"y":900}}}},"chimchar":{".":{".":{"regular":{"x":800,"y":900},"shiny":{"x":840,"y":900}}}},"monferno":{".":{".":{"regular":{"x":880,"y":900},"shiny":{"x":920,"y":900}}}},"infernape":{".":{".":{"regular":{"x":960,"y":900},"shiny":{"x":1000,"y":900}}}},"piplup":{".":{".":{"regular":{"x":1040,"y":900},"shiny":{"x":1080,"y":900}}}},"prinplup":{".":{".":{"regular":{"x":1120,"y":900},"shiny":{"x":1160,"y":900}}}},"empoleon":{".":{".":{"regular":{"x":1200,"y":900},"shiny":{"x":1240,"y":900}}}},"starly":{".":{".":{"regular":{"x":0,"y":930},"shiny":{"x":40,"y":930}}}},"staravia":{".":{".":{"regular":{"x":80,"y":930},"shiny":{"x":120,"y":930}}}},"staraptor":{".":{".":{"regular":{"x":160,"y":930},"shiny":{"x":200,"y":930}}}},"bidoof":{".":{".":{"regular":{"x":240,"y":930},"shiny":{"x":280,"y":930}}}},"bibarel":{".":{".":{"regular":{"x":320,"y":930},"shiny":{"x":360,"y":930}}}},"kricketot":{".":{".":{"regular":{"x":400,"y":930},"shiny":{"x":440,"y":930}}}},"kricketune":{".":{".":{"regular":{"x":480,"y":930},"shiny":{"x":520,"y":930}}}},"shinx":{".":{".":{"regular":{"x":560,"y":930},"shiny":{"x":600,"y":930}}}},"luxio":{".":{".":{"regular":{"x":640,"y":930},"shiny":{"x":680,"y":930}}}},"luxray":{".":{".":{"regular":{"x":720,"y":930},"shiny":{"x":760,"y":930}}}},"budew":{".":{".":{"regular":{"x":800,"y":930},"shiny":{"x":880,"y":930}},"right":{"regular":{"x":840,"y":930},"shiny":{"x":920,"y":930}}}},"roserade":{".":{".":{"regular":{"x":960,"y":930},"shiny":{"x":1040,"y":930}},"right":{"regular":{"x":1000,"y":930},"shiny":{"x":1080,"y":930}}}},"cranidos":{".":{".":{"regular":{"x":1120,"y":930},"shiny":{"x":1160,"y":930}}}},"rampardos":{".":{".":{"regular":{"x":1200,"y":930},"shiny":{"x":1240,"y":930}}}},"shieldon":{".":{".":{"regular":{"x":0,"y":960},"shiny":{"x":40,"y":960}}}},"bastiodon":{".":{".":{"regular":{"x":80,"y":960},"shiny":{"x":120,"y":960}}}},"burmy":{".":{".":{"regular":{"x":160,"y":960},"shiny":{"x":200,"y":960}}},"plant":{".":{"regular":{"x":160,"y":960},"shiny":{"x":200,"y":960}}},"sandy":{".":{"regular":{"x":240,"y":960},"shiny":{"x":280,"y":960}}},"trash":{".":{"regular":{"x":320,"y":960},"shiny":{"x":360,"y":960}}}},"wormadam":{".":{".":{"regular":{"x":400,"y":960},"shiny":{"x":440,"y":960}}},"plant":{".":{"regular":{"x":400,"y":960},"shiny":{"x":440,"y":960}}},"sandy":{".":{"regular":{"x":480,"y":960},"shiny":{"x":520,"y":960}}},"trash":{".":{"regular":{"x":560,"y":960},"shiny":{"x":600,"y":960}}}},"mothim":{".":{".":{"regular":{"x":640,"y":960},"shiny":{"x":680,"y":960}}}},"combee":{".":{".":{"regular":{"x":720,"y":960},"shiny":{"x":760,"y":960}}}},"vespiquen":{".":{".":{"regular":{"x":800,"y":960},"shiny":{"x":840,"y":960}}}},"pachirisu":{".":{".":{"regular":{"x":880,"y":960},"shiny":{"x":920,"y":960}}}},"buizel":{".":{".":{"regular":{"x":960,"y":960},"shiny":{"x":1000,"y":960}}}},"floatzel":{".":{".":{"regular":{"x":1040,"y":960},"shiny":{"x":1080,"y":960}}}},"cherubi":{".":{".":{"regular":{"x":1120,"y":960},"shiny":{"x":1160,"y":960}}}},"cherrim":{".":{".":{"regular":{"x":1200,"y":960},"shiny":{"x":1240,"y":960}}},"overcast":{".":{"regular":{"x":1200,"y":960},"shiny":{"x":1240,"y":960}}},"sunshine":{".":{"regular":{"x":0,"y":990},"shiny":{"x":40,"y":990}}}},"shellos":{".":{".":{"regular":{"x":80,"y":990},"shiny":{"x":120,"y":990}}},"east":{".":{"regular":{"x":160,"y":990},"shiny":{"x":200,"y":990}}},"west":{".":{"regular":{"x":80,"y":990},"shiny":{"x":120,"y":990}}}},"gastrodon":{".":{".":{"regular":{"x":240,"y":990},"shiny":{"x":280,"y":990}}},"east":{".":{"regular":{"x":320,"y":990},"shiny":{"x":360,"y":990}}},"west":{".":{"regular":{"x":240,"y":990},"shiny":{"x":280,"y":990}}}},"ambipom":{".":{".":{"regular":{"x":400,"y":990},"shiny":{"x":440,"y":990}}}},"drifloon":{".":{".":{"regular":{"x":480,"y":990},"shiny":{"x":520,"y":990}}}},"drifblim":{".":{".":{"regular":{"x":560,"y":990},"shiny":{"x":600,"y":990}}}},"buneary":{".":{".":{"regular":{"x":640,"y":990},"shiny":{"x":680,"y":990}}}},"lopunny":{".":{".":{"regular":{"x":720,"y":990},"shiny":{"x":760,"y":990}}}},"mismagius":{".":{".":{"regular":{"x":800,"y":990},"shiny":{"x":840,"y":990}}}},"honchkrow":{".":{".":{"regular":{"x":880,"y":990},"shiny":{"x":920,"y":990}}}},"glameow":{".":{".":{"regular":{"x":960,"y":990},"shiny":{"x":1000,"y":990}}}},"purugly":{".":{".":{"regular":{"x":1040,"y":990},"shiny":{"x":1080,"y":990}}}},"chingling":{".":{".":{"regular":{"x":1120,"y":990},"shiny":{"x":1160,"y":990}}}},"stunky":{".":{".":{"regular":{"x":1200,"y":990},"shiny":{"x":1240,"y":990}}}},"skuntank":{".":{".":{"regular":{"x":0,"y":1020},"shiny":{"x":40,"y":1020}}}},"bronzor":{".":{".":{"regular":{"x":80,"y":1020},"shiny":{"x":120,"y":1020}}}},"bronzong":{".":{".":{"regular":{"x":160,"y":1020},"shiny":{"x":200,"y":1020}}}},"bonsly":{".":{".":{"regular":{"x":240,"y":1020},"shiny":{"x":280,"y":1020}}}},"mime-jr":{".":{".":{"regular":{"x":320,"y":1020},"shiny":{"x":360,"y":1020}}}},"happiny":{".":{".":{"regular":{"x":400,"y":1020},"shiny":{"x":440,"y":1020}}}},"chatot":{".":{".":{"regular":{"x":480,"y":1020},"shiny":{"x":520,"y":1020}}}},"spiritomb":{".":{".":{"regular":{"x":560,"y":1020},"shiny":{"x":600,"y":1020}}}},"gible":{".":{".":{"regular":{"x":640,"y":1020},"shiny":{"x":680,"y":1020}}}},"gabite":{".":{".":{"regular":{"x":720,"y":1020},"shiny":{"x":760,"y":1020}}}},"garchomp":{".":{".":{"regular":{"x":800,"y":1020},"shiny":{"x":840,"y":1020}}},"mega":{".":{"regular":{"x":880,"y":1020},"shiny":{"x":920,"y":1020}}}},"munchlax":{".":{".":{"regular":{"x":960,"y":1020},"shiny":{"x":1000,"y":1020}}}},"riolu":{".":{".":{"regular":{"x":1040,"y":1020},"shiny":{"x":1080,"y":1020}}}},"lucario":{".":{".":{"regular":{"x":1120,"y":1020},"shiny":{"x":1160,"y":1020}}},"mega":{".":{"regular":{"x":1200,"y":1020},"shiny":{"x":1240,"y":1020}}}},"hippopotas":{".":{".":{"regular":{"x":0,"y":1050},"shiny":{"x":40,"y":1050}}}},"hippowdon":{".":{".":{"regular":{"x":80,"y":1050},"shiny":{"x":120,"y":1050}}}},"skorupi":{".":{".":{"regular":{"x":160,"y":1050},"shiny":{"x":200,"y":1050}}}},"drapion":{".":{".":{"regular":{"x":240,"y":1050},"shiny":{"x":280,"y":1050}}}},"croagunk":{".":{".":{"regular":{"x":320,"y":1050},"shiny":{"x":360,"y":1050}}}},"toxicroak":{".":{".":{"regular":{"x":400,"y":1050},"shiny":{"x":440,"y":1050}}}},"carnivine":{".":{".":{"regular":{"x":480,"y":1050},"shiny":{"x":520,"y":1050}}}},"finneon":{".":{".":{"regular":{"x":560,"y":1050},"shiny":{"x":600,"y":1050}}}},"lumineon":{".":{".":{"regular":{"x":640,"y":1050},"shiny":{"x":680,"y":1050}}}},"mantyke":{".":{".":{"regular":{"x":720,"y":1050},"shiny":{"x":760,"y":1050}}}},"snover":{".":{".":{"regular":{"x":800,"y":1050},"shiny":{"x":840,"y":1050}}}},"abomasnow":{".":{".":{"regular":{"x":880,"y":1050},"shiny":{"x":920,"y":1050}}},"mega":{".":{"regular":{"x":960,"y":1050},"shiny":{"x":1000,"y":1050}}}},"weavile":{".":{".":{"regular":{"x":1040,"y":1050},"shiny":{"x":1080,"y":1050}}}},"magnezone":{".":{".":{"regular":{"x":1120,"y":1050},"shiny":{"x":1160,"y":1050}}}},"lickilicky":{".":{".":{"regular":{"x":1200,"y":1050},"shiny":{"x":1240,"y":1050}}}},"rhyperior":{".":{".":{"regular":{"x":0,"y":1080},"shiny":{"x":40,"y":1080}}}},"tangrowth":{".":{".":{"regular":{"x":80,"y":1080},"shiny":{"x":120,"y":1080}}}},"electivire":{".":{".":{"regular":{"x":160,"y":1080},"shiny":{"x":200,"y":1080}}}},"magmortar":{".":{".":{"regular":{"x":240,"y":1080},"shiny":{"x":320,"y":1080}},"right":{"regular":{"x":280,"y":1080},"shiny":{"x":360,"y":1080}}}},"togekiss":{".":{".":{"regular":{"x":400,"y":1080},"shiny":{"x":480,"y":1080}},"right":{"regular":{"x":440,"y":1080},"shiny":{"x":520,"y":1080}}}},"yanmega":{".":{".":{"regular":{"x":560,"y":1080},"shiny":{"x":600,"y":1080}}}},"leafeon":{".":{".":{"regular":{"x":640,"y":1080},"shiny":{"x":680,"y":1080}}}},"glaceon":{".":{".":{"regular":{"x":720,"y":1080},"shiny":{"x":760,"y":1080}}}},"gliscor":{".":{".":{"regular":{"x":800,"y":1080},"shiny":{"x":840,"y":1080}}}},"mamoswine":{".":{".":{"regular":{"x":880,"y":1080},"shiny":{"x":920,"y":1080}}}},"porygon-z":{".":{".":{"regular":{"x":960,"y":1080},"shiny":{"x":1000,"y":1080}}}},"gallade":{".":{".":{"regular":{"x":1040,"y":1080},"shiny":{"x":1080,"y":1080}}}},"probopass":{".":{".":{"regular":{"x":1120,"y":1080},"shiny":{"x":1160,"y":1080}}}},"dusknoir":{".":{".":{"regular":{"x":1200,"y":1080},"shiny":{"x":1240,"y":1080}}}},"froslass":{".":{".":{"regular":{"x":0,"y":1110},"shiny":{"x":40,"y":1110}}}},"rotom":{".":{".":{"regular":{"x":80,"y":1110},"shiny":{"x":120,"y":1110}}},"fan":{".":{"regular":{"x":160,"y":1110},"shiny":{"x":200,"y":1110}}},"frost":{".":{"regular":{"x":240,"y":1110},"shiny":{"x":280,"y":1110}}},"heat":{".":{"regular":{"x":320,"y":1110},"shiny":{"x":360,"y":1110}}},"mow":{".":{"regular":{"x":400,"y":1110},"shiny":{"x":440,"y":1110}}},"wash":{".":{"regular":{"x":480,"y":1110},"shiny":{"x":560,"y":1110}},"right":{"regular":{"x":520,"y":1110},"shiny":{"x":600,"y":1110}}}},"uxie":{".":{".":{"regular":{"x":640,"y":1110},"shiny":{"x":680,"y":1110}}}},"mesprit":{".":{".":{"regular":{"x":720,"y":1110},"shiny":{"x":760,"y":1110}}}},"azelf":{".":{".":{"regular":{"x":800,"y":1110},"shiny":{"x":840,"y":1110}}}},"dialga":{".":{".":{"regular":{"x":880,"y":1110},"shiny":{"x":920,"y":1110}}}},"palkia":{".":{".":{"regular":{"x":960,"y":1110},"shiny":{"x":1000,"y":1110}}}},"heatran":{".":{".":{"regular":{"x":1040,"y":1110},"shiny":{"x":1080,"y":1110}}}},"regigigas":{".":{".":{"regular":{"x":1120,"y":1110},"shiny":{"x":1160,"y":1110}}}},"giratina":{".":{".":{"regular":{"x":1200,"y":1110},"shiny":{"x":1240,"y":1110}}},"altered":{".":{"regular":{"x":1200,"y":1110},"shiny":{"x":1240,"y":1110}}},"origin":{".":{"regular":{"x":0,"y":1140},"shiny":{"x":40,"y":1140}}}},"cresselia":{".":{".":{"regular":{"x":80,"y":1140},"shiny":{"x":120,"y":1140}}}},"phione":{".":{".":{"regular":{"x":160,"y":1140},"shiny":{"x":200,"y":1140}}}},"manaphy":{".":{".":{"regular":{"x":240,"y":1140},"shiny":{"x":280,"y":1140}}}},"darkrai":{".":{".":{"regular":{"x":320,"y":1140},"shiny":{"x":360,"y":1140}}}},"shaymin":{".":{".":{"regular":{"x":400,"y":1140},"shiny":{"x":440,"y":1140}}},"land":{".":{"regular":{"x":400,"y":1140},"shiny":{"x":440,"y":1140}}},"sky":{".":{"regular":{"x":480,"y":1140},"shiny":{"x":560,"y":1140}},"right":{"regular":{"x":520,"y":1140},"shiny":{"x":600,"y":1140}}}},"arceus":{".":{".":{"regular":{"x":640,"y":1140},"shiny":{"x":680,"y":1140}}},"bug":{".":{"regular":{"x":640,"y":1140},"shiny":{"x":680,"y":1140}}},"dark":{".":{"regular":{"x":640,"y":1140},"shiny":{"x":680,"y":1140}}},"dragon":{".":{"regular":{"x":640,"y":1140},"shiny":{"x":680,"y":1140}}},"electric":{".":{"regular":{"x":640,"y":1140},"shiny":{"x":680,"y":1140}}},"fairy":{".":{"regular":{"x":640,"y":1140},"shiny":{"x":680,"y":1140}}},"fighting":{".":{"regular":{"x":640,"y":1140},"shiny":{"x":680,"y":1140}}},"fire":{".":{"regular":{"x":640,"y":1140},"shiny":{"x":680,"y":1140}}},"flying":{".":{"regular":{"x":640,"y":1140},"shiny":{"x":680,"y":1140}}},"ghost":{".":{"regular":{"x":640,"y":1140},"shiny":{"x":680,"y":1140}}},"grass":{".":{"regular":{"x":640,"y":1140},"shiny":{"x":680,"y":1140}}},"ground":{".":{"regular":{"x":640,"y":1140},"shiny":{"x":680,"y":1140}}},"ice":{".":{"regular":{"x":640,"y":1140},"shiny":{"x":680,"y":1140}}},"normal":{".":{"regular":{"x":640,"y":1140},"shiny":{"x":680,"y":1140}}},"poison":{".":{"regular":{"x":640,"y":1140},"shiny":{"x":680,"y":1140}}},"psychic":{".":{"regular":{"x":640,"y":1140},"shiny":{"x":680,"y":1140}}},"rock":{".":{"regular":{"x":640,"y":1140},"shiny":{"x":680,"y":1140}}},"steel":{".":{"regular":{"x":640,"y":1140},"shiny":{"x":680,"y":1140}}},"water":{".":{"regular":{"x":640,"y":1140},"shiny":{"x":680,"y":1140}}}},"victini":{".":{".":{"regular":{"x":720,"y":1140},"shiny":{"x":760,"y":1140}}}},"snivy":{".":{".":{"regular":{"x":800,"y":1140},"shiny":{"x":840,"y":1140}}}},"servine":{".":{".":{"regular":{"x":880,"y":1140},"shiny":{"x":920,"y":1140}}}},"serperior":{".":{".":{"regular":{"x":960,"y":1140},"shiny":{"x":1000,"y":1140}}}},"tepig":{".":{".":{"regular":{"x":1040,"y":1140},"shiny":{"x":1080,"y":1140}}}},"pignite":{".":{".":{"regular":{"x":1120,"y":1140},"shiny":{"x":1160,"y":1140}}}},"emboar":{".":{".":{"regular":{"x":1200,"y":1140},"shiny":{"x":0,"y":1170}},"right":{"regular":{"x":1240,"y":1140},"shiny":{"x":40,"y":1170}}}},"oshawott":{".":{".":{"regular":{"x":80,"y":1170},"shiny":{"x":120,"y":1170}}}},"dewott":{".":{".":{"regular":{"x":160,"y":1170},"shiny":{"x":200,"y":1170}}}},"samurott":{".":{".":{"regular":{"x":240,"y":1170},"shiny":{"x":280,"y":1170}}}},"patrat":{".":{".":{"regular":{"x":320,"y":1170},"shiny":{"x":360,"y":1170}}}},"watchog":{".":{".":{"regular":{"x":400,"y":1170},"shiny":{"x":440,"y":1170}}}},"lillipup":{".":{".":{"regular":{"x":480,"y":1170},"shiny":{"x":520,"y":1170}}}},"herdier":{".":{".":{"regular":{"x":560,"y":1170},"shiny":{"x":600,"y":1170}}}},"stoutland":{".":{".":{"regular":{"x":640,"y":1170},"shiny":{"x":680,"y":1170}}}},"purrloin":{".":{".":{"regular":{"x":720,"y":1170},"shiny":{"x":760,"y":1170}}}},"liepard":{".":{".":{"regular":{"x":800,"y":1170},"shiny":{"x":840,"y":1170}}}},"pansage":{".":{".":{"regular":{"x":880,"y":1170},"shiny":{"x":920,"y":1170}}}},"simisage":{".":{".":{"regular":{"x":960,"y":1170},"shiny":{"x":1000,"y":1170}}}},"pansear":{".":{".":{"regular":{"x":1040,"y":1170},"shiny":{"x":1120,"y":1170}},"right":{"regular":{"x":1080,"y":1170},"shiny":{"x":1160,"y":1170}}}},"simisear":{".":{".":{"regular":{"x":1200,"y":1170},"shiny":{"x":0,"y":1200}},"right":{"regular":{"x":1240,"y":1170},"shiny":{"x":40,"y":1200}}}},"panpour":{".":{".":{"regular":{"x":80,"y":1200},"shiny":{"x":120,"y":1200}}}},"simipour":{".":{".":{"regular":{"x":160,"y":1200},"shiny":{"x":200,"y":1200}}}},"munna":{".":{".":{"regular":{"x":240,"y":1200},"shiny":{"x":280,"y":1200}}}},"musharna":{".":{".":{"regular":{"x":320,"y":1200},"shiny":{"x":360,"y":1200}}}},"pidove":{".":{".":{"regular":{"x":400,"y":1200},"shiny":{"x":440,"y":1200}}}},"tranquill":{".":{".":{"regular":{"x":480,"y":1200},"shiny":{"x":520,"y":1200}}}},"unfezant":{".":{".":{"regular":{"x":560,"y":1200},"shiny":{"x":640,"y":1200}},"female":{"regular":{"x":600,"y":1200},"shiny":{"x":680,"y":1200}}}},"blitzle":{".":{".":{"regular":{"x":720,"y":1200},"shiny":{"x":760,"y":1200}}}},"zebstrika":{".":{".":{"regular":{"x":800,"y":1200},"shiny":{"x":840,"y":1200}}}},"roggenrola":{".":{".":{"regular":{"x":880,"y":1200},"shiny":{"x":920,"y":1200}}}},"boldore":{".":{".":{"regular":{"x":960,"y":1200},"shiny":{"x":1000,"y":1200}}}},"gigalith":{".":{".":{"regular":{"x":1040,"y":1200},"shiny":{"x":1080,"y":1200}}}},"woobat":{".":{".":{"regular":{"x":1120,"y":1200},"shiny":{"x":1160,"y":1200}}}},"swoobat":{".":{".":{"regular":{"x":1200,"y":1200},"shiny":{"x":1240,"y":1200}}}},"drilbur":{".":{".":{"regular":{"x":0,"y":1230},"shiny":{"x":80,"y":1230}},"right":{"regular":{"x":40,"y":1230},"shiny":{"x":120,"y":1230}}}},"excadrill":{".":{".":{"regular":{"x":160,"y":1230},"shiny":{"x":240,"y":1230}},"right":{"regular":{"x":200,"y":1230},"shiny":{"x":280,"y":1230}}}},"audino":{".":{".":{"regular":{"x":320,"y":1230},"shiny":{"x":360,"y":1230}}}},"timburr":{".":{".":{"regular":{"x":400,"y":1230},"shiny":{"x":440,"y":1230}}}},"gurdurr":{".":{".":{"regular":{"x":480,"y":1230},"shiny":{"x":520,"y":1230}}}},"conkeldurr":{".":{".":{"regular":{"x":560,"y":1230},"shiny":{"x":600,"y":1230}}}},"tympole":{".":{".":{"regular":{"x":640,"y":1230},"shiny":{"x":680,"y":1230}}}},"palpitoad":{".":{".":{"regular":{"x":720,"y":1230},"shiny":{"x":760,"y":1230}}}},"seismitoad":{".":{".":{"regular":{"x":800,"y":1230},"shiny":{"x":840,"y":1230}}}},"throh":{".":{".":{"regular":{"x":880,"y":1230},"shiny":{"x":920,"y":1230}}}},"sawk":{".":{".":{"regular":{"x":960,"y":1230},"shiny":{"x":1040,"y":1230}},"right":{"regular":{"x":1000,"y":1230},"shiny":{"x":1080,"y":1230}}}},"sewaddle":{".":{".":{"regular":{"x":1120,"y":1230},"shiny":{"x":1160,"y":1230}}}},"swadloon":{".":{".":{"regular":{"x":1200,"y":1230},"shiny":{"x":1240,"y":1230}}}},"leavanny":{".":{".":{"regular":{"x":0,"y":1260},"shiny":{"x":40,"y":1260}}}},"venipede":{".":{".":{"regular":{"x":80,"y":1260},"shiny":{"x":120,"y":1260}}}},"whirlipede":{".":{".":{"regular":{"x":160,"y":1260},"shiny":{"x":200,"y":1260}}}},"scolipede":{".":{".":{"regular":{"x":240,"y":1260},"shiny":{"x":280,"y":1260}}}},"cottonee":{".":{".":{"regular":{"x":320,"y":1260},"shiny":{"x":360,"y":1260}}}},"whimsicott":{".":{".":{"regular":{"x":400,"y":1260},"shiny":{"x":440,"y":1260}}}},"petilil":{".":{".":{"regular":{"x":480,"y":1260},"shiny":{"x":520,"y":1260}}}},"lilligant":{".":{".":{"regular":{"x":560,"y":1260},"shiny":{"x":640,"y":1260}},"right":{"regular":{"x":600,"y":1260},"shiny":{"x":680,"y":1260}}}},"basculin":{".":{".":{"regular":{"x":720,"y":1260},"shiny":{"x":760,"y":1260}}},"blue-striped":{".":{"regular":{"x":800,"y":1260},"shiny":{"x":840,"y":1260}}},"red-striped":{".":{"regular":{"x":720,"y":1260},"shiny":{"x":760,"y":1260}}}},"sandile":{".":{".":{"regular":{"x":880,"y":1260},"shiny":{"x":920,"y":1260}}}},"krokorok":{".":{".":{"regular":{"x":960,"y":1260},"shiny":{"x":1000,"y":1260}}}},"krookodile":{".":{".":{"regular":{"x":1040,"y":1260},"shiny":{"x":1080,"y":1260}}}},"darumaka":{".":{".":{"regular":{"x":1120,"y":1260},"shiny":{"x":1160,"y":1260}}}},"darmanitan":{".":{".":{"regular":{"x":1200,"y":1260},"shiny":{"x":1240,"y":1260}}},"standard":{".":{"regular":{"x":1200,"y":1260},"shiny":{"x":1240,"y":1260}}},"zen":{".":{"regular":{"x":0,"y":1290},"shiny":{"x":40,"y":1290}}}},"maractus":{".":{".":{"regular":{"x":80,"y":1290},"shiny":{"x":120,"y":1290}}}},"dwebble":{".":{".":{"regular":{"x":160,"y":1290},"shiny":{"x":200,"y":1290}}}},"crustle":{".":{".":{"regular":{"x":240,"y":1290},"shiny":{"x":280,"y":1290}}}},"scraggy":{".":{".":{"regular":{"x":320,"y":1290},"shiny":{"x":360,"y":1290}}}},"scrafty":{".":{".":{"regular":{"x":400,"y":1290},"shiny":{"x":440,"y":1290}}}},"sigilyph":{".":{".":{"regular":{"x":480,"y":1290},"shiny":{"x":520,"y":1290}}}},"yamask":{".":{".":{"regular":{"x":560,"y":1290},"shiny":{"x":600,"y":1290}}}},"cofagrigus":{".":{".":{"regular":{"x":640,"y":1290},"shiny":{"x":680,"y":1290}}}},"tirtouga":{".":{".":{"regular":{"x":720,"y":1290},"shiny":{"x":760,"y":1290}}}},"carracosta":{".":{".":{"regular":{"x":800,"y":1290},"shiny":{"x":840,"y":1290}}}},"archen":{".":{".":{"regular":{"x":880,"y":1290},"shiny":{"x":920,"y":1290}}}},"archeops":{".":{".":{"regular":{"x":960,"y":1290},"shiny":{"x":1000,"y":1290}}}},"trubbish":{".":{".":{"regular":{"x":1040,"y":1290},"shiny":{"x":1080,"y":1290}}}},"garbodor":{".":{".":{"regular":{"x":1120,"y":1290},"shiny":{"x":1200,"y":1290}},"right":{"regular":{"x":1160,"y":1290},"shiny":{"x":1240,"y":1290}}}},"zorua":{".":{".":{"regular":{"x":0,"y":1320},"shiny":{"x":40,"y":1320}}}},"zoroark":{".":{".":{"regular":{"x":80,"y":1320},"shiny":{"x":120,"y":1320}}}},"minccino":{".":{".":{"regular":{"x":160,"y":1320},"shiny":{"x":200,"y":1320}}}},"cinccino":{".":{".":{"regular":{"x":240,"y":1320},"shiny":{"x":280,"y":1320}}}},"gothita":{".":{".":{"regular":{"x":320,"y":1320},"shiny":{"x":360,"y":1320}}}},"gothorita":{".":{".":{"regular":{"x":400,"y":1320},"shiny":{"x":440,"y":1320}}}},"gothitelle":{".":{".":{"regular":{"x":480,"y":1320},"shiny":{"x":520,"y":1320}}}},"solosis":{".":{".":{"regular":{"x":560,"y":1320},"shiny":{"x":640,"y":1320}},"right":{"regular":{"x":600,"y":1320},"shiny":{"x":680,"y":1320}}}},"duosion":{".":{".":{"regular":{"x":720,"y":1320},"shiny":{"x":760,"y":1320}}}},"reuniclus":{".":{".":{"regular":{"x":800,"y":1320},"shiny":{"x":840,"y":1320}}}},"ducklett":{".":{".":{"regular":{"x":880,"y":1320},"shiny":{"x":920,"y":1320}}}},"swanna":{".":{".":{"regular":{"x":960,"y":1320},"shiny":{"x":1000,"y":1320}}}},"vanillite":{".":{".":{"regular":{"x":1040,"y":1320},"shiny":{"x":1080,"y":1320}}}},"vanillish":{".":{".":{"regular":{"x":1120,"y":1320},"shiny":{"x":1160,"y":1320}}}},"vanilluxe":{".":{".":{"regular":{"x":1200,"y":1320},"shiny":{"x":0,"y":1350}},"right":{"regular":{"x":1240,"y":1320},"shiny":{"x":40,"y":1350}}}},"deerling":{".":{".":{"regular":{"x":80,"y":1350},"shiny":{"x":120,"y":1350}}},"autumn":{".":{"regular":{"x":160,"y":1350},"shiny":{"x":200,"y":1350}}},"spring":{".":{"regular":{"x":80,"y":1350},"shiny":{"x":120,"y":1350}}},"summer":{".":{"regular":{"x":240,"y":1350},"shiny":{"x":280,"y":1350}}},"winter":{".":{"regular":{"x":320,"y":1350},"shiny":{"x":360,"y":1350}}}},"sawsbuck":{".":{".":{"regular":{"x":400,"y":1350},"shiny":{"x":440,"y":1350}}},"autumn":{".":{"regular":{"x":480,"y":1350},"shiny":{"x":520,"y":1350}}},"spring":{".":{"regular":{"x":400,"y":1350},"shiny":{"x":440,"y":1350}}},"summer":{".":{"regular":{"x":560,"y":1350},"shiny":{"x":600,"y":1350}}},"winter":{".":{"regular":{"x":640,"y":1350},"shiny":{"x":680,"y":1350}}}},"emolga":{".":{".":{"regular":{"x":720,"y":1350},"shiny":{"x":760,"y":1350}}}},"karrablast":{".":{".":{"regular":{"x":800,"y":1350},"shiny":{"x":840,"y":1350}}}},"escavalier":{".":{".":{"regular":{"x":880,"y":1350},"shiny":{"x":920,"y":1350}}}},"foongus":{".":{".":{"regular":{"x":960,"y":1350},"shiny":{"x":1000,"y":1350}}}},"amoonguss":{".":{".":{"regular":{"x":1040,"y":1350},"shiny":{"x":1120,"y":1350}},"right":{"regular":{"x":1080,"y":1350},"shiny":{"x":1160,"y":1350}}}},"frillish":{".":{".":{"regular":{"x":1200,"y":1350},"shiny":{"x":0,"y":1380}},"female":{"regular":{"x":1240,"y":1350},"shiny":{"x":40,"y":1380}}}},"jellicent":{".":{".":{"regular":{"x":80,"y":1380},"shiny":{"x":160,"y":1380}},"female":{"regular":{"x":120,"y":1380},"shiny":{"x":200,"y":1380}}}},"alomomola":{".":{".":{"regular":{"x":240,"y":1380},"shiny":{"x":280,"y":1380}}}},"joltik":{".":{".":{"regular":{"x":320,"y":1380},"shiny":{"x":360,"y":1380}}}},"galvantula":{".":{".":{"regular":{"x":400,"y":1380},"shiny":{"x":440,"y":1380}}}},"ferroseed":{".":{".":{"regular":{"x":480,"y":1380},"shiny":{"x":520,"y":1380}}}},"ferrothorn":{".":{".":{"regular":{"x":560,"y":1380},"shiny":{"x":600,"y":1380}}}},"klink":{".":{".":{"regular":{"x":640,"y":1380},"shiny":{"x":720,"y":1380}},"right":{"regular":{"x":680,"y":1380},"shiny":{"x":760,"y":1380}}}},"klang":{".":{".":{"regular":{"x":800,"y":1380},"shiny":{"x":880,"y":1380}},"right":{"regular":{"x":840,"y":1380},"shiny":{"x":920,"y":1380}}}},"klinklang":{".":{".":{"regular":{"x":960,"y":1380},"shiny":{"x":1040,"y":1380}},"right":{"regular":{"x":1000,"y":1380},"shiny":{"x":1080,"y":1380}}}},"tynamo":{".":{".":{"regular":{"x":1120,"y":1380},"shiny":{"x":1160,"y":1380}}}},"eelektrik":{".":{".":{"regular":{"x":1200,"y":1380},"shiny":{"x":1240,"y":1380}}}},"eelektross":{".":{".":{"regular":{"x":0,"y":1410},"shiny":{"x":40,"y":1410}}}},"elgyem":{".":{".":{"regular":{"x":80,"y":1410},"shiny":{"x":120,"y":1410}}}},"beheeyem":{".":{".":{"regular":{"x":160,"y":1410},"shiny":{"x":200,"y":1410}}}},"litwick":{".":{".":{"regular":{"x":240,"y":1410},"shiny":{"x":320,"y":1410}},"right":{"regular":{"x":280,"y":1410},"shiny":{"x":360,"y":1410}}}},"lampent":{".":{".":{"regular":{"x":400,"y":1410},"shiny":{"x":440,"y":1410}}}},"chandelure":{".":{".":{"regular":{"x":480,"y":1410},"shiny":{"x":520,"y":1410}}}},"axew":{".":{".":{"regular":{"x":560,"y":1410},"shiny":{"x":600,"y":1410}}}},"fraxure":{".":{".":{"regular":{"x":640,"y":1410},"shiny":{"x":680,"y":1410}}}},"haxorus":{".":{".":{"regular":{"x":720,"y":1410},"shiny":{"x":760,"y":1410}}}},"cubchoo":{".":{".":{"regular":{"x":800,"y":1410},"shiny":{"x":840,"y":1410}}}},"beartic":{".":{".":{"regular":{"x":880,"y":1410},"shiny":{"x":920,"y":1410}}}},"cryogonal":{".":{".":{"regular":{"x":960,"y":1410},"shiny":{"x":1000,"y":1410}}}},"shelmet":{".":{".":{"regular":{"x":1040,"y":1410},"shiny":{"x":1080,"y":1410}}}},"accelgor":{".":{".":{"regular":{"x":1120,"y":1410},"shiny":{"x":1160,"y":1410}}}},"stunfisk":{".":{".":{"regular":{"x":1200,"y":1410},"shiny":{"x":1240,"y":1410}}}},"mienfoo":{".":{".":{"regular":{"x":0,"y":1440},"shiny":{"x":40,"y":1440}}}},"mienshao":{".":{".":{"regular":{"x":80,"y":1440},"shiny":{"x":120,"y":1440}}}},"druddigon":{".":{".":{"regular":{"x":160,"y":1440},"shiny":{"x":200,"y":1440}}}},"golett":{".":{".":{"regular":{"x":240,"y":1440},"shiny":{"x":320,"y":1440}},"right":{"regular":{"x":280,"y":1440},"shiny":{"x":360,"y":1440}}}},"golurk":{".":{".":{"regular":{"x":400,"y":1440},"shiny":{"x":480,"y":1440}},"right":{"regular":{"x":440,"y":1440},"shiny":{"x":520,"y":1440}}}},"pawniard":{".":{".":{"regular":{"x":560,"y":1440},"shiny":{"x":600,"y":1440}}}},"bisharp":{".":{".":{"regular":{"x":640,"y":1440},"shiny":{"x":680,"y":1440}}}},"bouffalant":{".":{".":{"regular":{"x":720,"y":1440},"shiny":{"x":760,"y":1440}}}},"rufflet":{".":{".":{"regular":{"x":800,"y":1440},"shiny":{"x":840,"y":1440}}}},"braviary":{".":{".":{"regular":{"x":880,"y":1440},"shiny":{"x":920,"y":1440}}}},"vullaby":{".":{".":{"regular":{"x":960,"y":1440},"shiny":{"x":1000,"y":1440}}}},"mandibuzz":{".":{".":{"regular":{"x":1040,"y":1440},"shiny":{"x":1080,"y":1440}}}},"heatmor":{".":{".":{"regular":{"x":1120,"y":1440},"shiny":{"x":1160,"y":1440}}}},"durant":{".":{".":{"regular":{"x":1200,"y":1440},"shiny":{"x":1240,"y":1440}}}},"deino":{".":{".":{"regular":{"x":0,"y":1470},"shiny":{"x":40,"y":1470}}}},"zweilous":{".":{".":{"regular":{"x":80,"y":1470},"shiny":{"x":120,"y":1470}}}},"hydreigon":{".":{".":{"regular":{"x":160,"y":1470},"shiny":{"x":200,"y":1470}}}},"larvesta":{".":{".":{"regular":{"x":240,"y":1470},"shiny":{"x":280,"y":1470}}}},"volcarona":{".":{".":{"regular":{"x":320,"y":1470},"shiny":{"x":360,"y":1470}}}},"cobalion":{".":{".":{"regular":{"x":400,"y":1470},"shiny":{"x":440,"y":1470}}}},"terrakion":{".":{".":{"regular":{"x":480,"y":1470},"shiny":{"x":520,"y":1470}}}},"virizion":{".":{".":{"regular":{"x":560,"y":1470},"shiny":{"x":600,"y":1470}}}},"tornadus":{".":{".":{"regular":{"x":640,"y":1470},"shiny":{"x":680,"y":1470}}},"incarnate":{".":{"regular":{"x":640,"y":1470},"shiny":{"x":680,"y":1470}}},"therian":{".":{"regular":{"x":720,"y":1470},"shiny":{"x":760,"y":1470}}}},"thundurus":{".":{".":{"regular":{"x":800,"y":1470},"shiny":{"x":840,"y":1470}}},"incarnate":{".":{"regular":{"x":800,"y":1470},"shiny":{"x":840,"y":1470}}},"therian":{".":{"regular":{"x":880,"y":1470},"shiny":{"x":920,"y":1470}}}},"reshiram":{".":{".":{"regular":{"x":960,"y":1470},"shiny":{"x":1000,"y":1470}}}},"zekrom":{".":{".":{"regular":{"x":1040,"y":1470},"shiny":{"x":1080,"y":1470}}}},"landorus":{".":{".":{"regular":{"x":1120,"y":1470},"shiny":{"x":1160,"y":1470}}},"incarnate":{".":{"regular":{"x":1120,"y":1470},"shiny":{"x":1160,"y":1470}}},"therian":{".":{"regular":{"x":1200,"y":1470},"shiny":{"x":1240,"y":1470}}}},"kyurem":{".":{".":{"regular":{"x":0,"y":1500},"shiny":{"x":80,"y":1500}},"right":{"regular":{"x":40,"y":1500},"shiny":{"x":120,"y":1500}}},"black":{".":{"regular":{"x":160,"y":1500},"shiny":{"x":240,"y":1500}},"right":{"regular":{"x":200,"y":1500},"shiny":{"x":280,"y":1500}}},"white":{".":{"regular":{"x":320,"y":1500},"shiny":{"x":400,"y":1500}},"right":{"regular":{"x":360,"y":1500},"shiny":{"x":440,"y":1500}}}},"keldeo":{".":{".":{"regular":{"x":480,"y":1500},"shiny":{"x":520,"y":1500}}},"ordinary":{".":{"regular":{"x":480,"y":1500},"shiny":{"x":520,"y":1500}}},"resolute":{".":{"regular":{"x":560,"y":1500},"shiny":{"x":640,"y":1500}},"right":{"regular":{"x":600,"y":1500},"shiny":{"x":680,"y":1500}}}},"meloetta":{".":{".":{"regular":{"x":720,"y":1500},"shiny":{"x":800,"y":1500}},"right":{"regular":{"x":760,"y":1500},"shiny":{"x":840,"y":1500}}},"aria":{".":{"regular":{"x":720,"y":1500},"shiny":{"x":800,"y":1500}},"right":{"regular":{"x":720,"y":1500},"shiny":{"x":800,"y":1500}}},"pirouette":{".":{"regular":{"x":880,"y":1500},"shiny":{"x":920,"y":1500}}}},"genesect":{".":{".":{"regular":{"x":960,"y":1500},"shiny":{"x":1000,"y":1500}}},"burn":{".":{"regular":{"x":960,"y":1500},"shiny":{"x":1000,"y":1500}}},"chill":{".":{"regular":{"x":960,"y":1500},"shiny":{"x":1000,"y":1500}}},"douse":{".":{"regular":{"x":960,"y":1500},"shiny":{"x":1000,"y":1500}}},"shock":{".":{"regular":{"x":960,"y":1500},"shiny":{"x":1000,"y":1500}}}},"chespin":{".":{".":{"regular":{"x":1040,"y":1500},"shiny":{"x":1080,"y":1500}}}},"quilladin":{".":{".":{"regular":{"x":1120,"y":1500},"shiny":{"x":1160,"y":1500}}}},"chesnaught":{".":{".":{"regular":{"x":1200,"y":1500},"shiny":{"x":1240,"y":1500}}}},"fennekin":{".":{".":{"regular":{"x":0,"y":1530},"shiny":{"x":40,"y":1530}}}},"braixen":{".":{".":{"regular":{"x":80,"y":1530},"shiny":{"x":120,"y":1530}}}},"delphox":{".":{".":{"regular":{"x":160,"y":1530},"shiny":{"x":200,"y":1530}}}},"froakie":{".":{".":{"regular":{"x":240,"y":1530},"shiny":{"x":280,"y":1530}}}},"frogadier":{".":{".":{"regular":{"x":320,"y":1530},"shiny":{"x":360,"y":1530}}}},"greninja":{".":{".":{"regular":{"x":400,"y":1530},"shiny":{"x":480,"y":1530}},"right":{"regular":{"x":440,"y":1530},"shiny":{"x":520,"y":1530}}}},"bunnelby":{".":{".":{"regular":{"x":560,"y":1530},"shiny":{"x":600,"y":1530}}}},"diggersby":{".":{".":{"regular":{"x":640,"y":1530},"shiny":{"x":680,"y":1530}}}},"fletchling":{".":{".":{"regular":{"x":720,"y":1530},"shiny":{"x":760,"y":1530}}}},"fletchinder":{".":{".":{"regular":{"x":800,"y":1530},"shiny":{"x":840,"y":1530}}}},"talonflame":{".":{".":{"regular":{"x":880,"y":1530},"shiny":{"x":920,"y":1530}}}},"scatterbug":{".":{".":{"regular":{"x":960,"y":1530},"shiny":{"x":1000,"y":1530}}}},"spewpa":{".":{".":{"regular":{"x":1040,"y":1530},"shiny":{"x":1080,"y":1530}}}},"vivillon":{".":{".":{"regular":{"x":1120,"y":1530},"shiny":{"x":1160,"y":1530}}},"archipelago":{".":{"regular":{"x":1200,"y":1530},"shiny":{"x":1240,"y":1530}}},"continental":{".":{"regular":{"x":0,"y":1560},"shiny":{"x":40,"y":1560}}},"elegant":{".":{"regular":{"x":80,"y":1560},"shiny":{"x":120,"y":1560}}},"fancy":{".":{"regular":{"x":160,"y":1560},"shiny":{"x":200,"y":1560}}},"garden":{".":{"regular":{"x":240,"y":1560},"shiny":{"x":280,"y":1560}}},"high-plains":{".":{"regular":{"x":320,"y":1560},"shiny":{"x":360,"y":1560}}},"icy-snow":{".":{"regular":{"x":400,"y":1560},"shiny":{"x":440,"y":1560}}},"jungle":{".":{"regular":{"x":480,"y":1560},"shiny":{"x":520,"y":1560}}},"marine":{".":{"regular":{"x":560,"y":1560},"shiny":{"x":600,"y":1560}}},"meadow":{".":{"regular":{"x":1120,"y":1530},"shiny":{"x":1160,"y":1530}}},"modern":{".":{"regular":{"x":640,"y":1560},"shiny":{"x":680,"y":1560}}},"monsoon":{".":{"regular":{"x":720,"y":1560},"shiny":{"x":760,"y":1560}}},"ocean":{".":{"regular":{"x":800,"y":1560},"shiny":{"x":840,"y":1560}}},"poke-ball":{".":{"regular":{"x":880,"y":1560},"shiny":{"x":920,"y":1560}}},"polar":{".":{"regular":{"x":960,"y":1560},"shiny":{"x":1000,"y":1560}}},"river":{".":{"regular":{"x":1040,"y":1560},"shiny":{"x":1080,"y":1560}}},"sandstorm":{".":{"regular":{"x":1120,"y":1560},"shiny":{"x":1160,"y":1560}}},"savanna":{".":{"regular":{"x":1200,"y":1560},"shiny":{"x":1240,"y":1560}}},"sun":{".":{"regular":{"x":0,"y":1590},"shiny":{"x":40,"y":1590}}},"tundra":{".":{"regular":{"x":80,"y":1590},"shiny":{"x":120,"y":1590}}}},"litleo":{".":{".":{"regular":{"x":160,"y":1590},"shiny":{"x":200,"y":1590}}}},"pyroar":{".":{".":{"regular":{"x":240,"y":1590},"shiny":{"x":320,"y":1590}},"female":{"regular":{"x":280,"y":1590},"shiny":{"x":360,"y":1590}}}},"flabebe":{".":{".":{"regular":{"x":400,"y":1590},"shiny":{"x":440,"y":1590}}},"blue":{".":{"regular":{"x":480,"y":1590},"shiny":{"x":520,"y":1590}}},"orange":{".":{"regular":{"x":560,"y":1590},"shiny":{"x":600,"y":1590}}},"red":{".":{"regular":{"x":400,"y":1590},"shiny":{"x":440,"y":1590}}},"white":{".":{"regular":{"x":640,"y":1590},"shiny":{"x":680,"y":1590}}},"yellow":{".":{"regular":{"x":720,"y":1590},"shiny":{"x":760,"y":1590}}}},"floette":{".":{".":{"regular":{"x":800,"y":1590},"shiny":{"x":840,"y":1590}}},"blue":{".":{"regular":{"x":880,"y":1590},"shiny":{"x":920,"y":1590}}},"eternal":{".":{"regular":{"x":960,"y":1590},"shiny":{"x":1000,"y":1590}}},"orange":{".":{"regular":{"x":1040,"y":1590},"shiny":{"x":1080,"y":1590}}},"red":{".":{"regular":{"x":800,"y":1590},"shiny":{"x":840,"y":1590}}},"white":{".":{"regular":{"x":1120,"y":1590},"shiny":{"x":1160,"y":1590}}},"yellow":{".":{"regular":{"x":1200,"y":1590},"shiny":{"x":1240,"y":1590}}}},"florges":{".":{".":{"regular":{"x":0,"y":1620},"shiny":{"x":40,"y":1620}}},"blue":{".":{"regular":{"x":80,"y":1620},"shiny":{"x":120,"y":1620}}},"orange":{".":{"regular":{"x":160,"y":1620},"shiny":{"x":200,"y":1620}}},"red":{".":{"regular":{"x":0,"y":1620},"shiny":{"x":40,"y":1620}}},"white":{".":{"regular":{"x":240,"y":1620},"shiny":{"x":280,"y":1620}}},"yellow":{".":{"regular":{"x":320,"y":1620},"shiny":{"x":360,"y":1620}}}},"skiddo":{".":{".":{"regular":{"x":400,"y":1620},"shiny":{"x":440,"y":1620}}}},"gogoat":{".":{".":{"regular":{"x":480,"y":1620},"shiny":{"x":520,"y":1620}}}},"pancham":{".":{".":{"regular":{"x":560,"y":1620},"shiny":{"x":600,"y":1620}}}},"pangoro":{".":{".":{"regular":{"x":640,"y":1620},"shiny":{"x":680,"y":1620}}}},"furfrou":{".":{".":{"regular":{"x":720,"y":1620},"shiny":{"x":760,"y":1620}}},"dandy":{".":{"regular":{"x":800,"y":1620},"shiny":{"x":840,"y":1620}}},"debutante":{".":{"regular":{"x":880,"y":1620},"shiny":{"x":960,"y":1620}},"right":{"regular":{"x":920,"y":1620},"shiny":{"x":1000,"y":1620}}},"diamond":{".":{"regular":{"x":1040,"y":1620},"shiny":{"x":1080,"y":1620}}},"heart":{".":{"regular":{"x":1120,"y":1620},"shiny":{"x":1160,"y":1620}}},"kabuki":{".":{"regular":{"x":1200,"y":1620},"shiny":{"x":1240,"y":1620}}},"la-reine":{".":{"regular":{"x":0,"y":1650},"shiny":{"x":40,"y":1650}}},"matron":{".":{"regular":{"x":80,"y":1650},"shiny":{"x":120,"y":1650}}},"pharaoh":{".":{"regular":{"x":160,"y":1650},"shiny":{"x":200,"y":1650}}},"star":{".":{"regular":{"x":240,"y":1650},"shiny":{"x":280,"y":1650}}}},"espurr":{".":{".":{"regular":{"x":320,"y":1650},"shiny":{"x":360,"y":1650}}}},"meowstic":{".":{".":{"regular":{"x":400,"y":1650},"shiny":{"x":480,"y":1650}},"female":{"regular":{"x":440,"y":1650},"shiny":{"x":520,"y":1650}}}},"honedge":{".":{".":{"regular":{"x":560,"y":1650},"shiny":{"x":600,"y":1650}}}},"doublade":{".":{".":{"regular":{"x":640,"y":1650},"shiny":{"x":680,"y":1650}}}},"aegislash":{".":{".":{"regular":{"x":720,"y":1650},"shiny":{"x":760,"y":1650}}},"blade":{".":{"regular":{"x":800,"y":1650},"shiny":{"x":840,"y":1650}}},"shield":{".":{"regular":{"x":720,"y":1650},"shiny":{"x":760,"y":1650}}}},"spritzee":{".":{".":{"regular":{"x":880,"y":1650},"shiny":{"x":920,"y":1650}}}},"aromatisse":{".":{".":{"regular":{"x":960,"y":1650},"shiny":{"x":1000,"y":1650}}}},"swirlix":{".":{".":{"regular":{"x":1040,"y":1650},"shiny":{"x":1080,"y":1650}}}},"slurpuff":{".":{".":{"regular":{"x":1120,"y":1650},"shiny":{"x":1160,"y":1650}}}},"inkay":{".":{".":{"regular":{"x":1200,"y":1650},"shiny":{"x":1240,"y":1650}}}},"malamar":{".":{".":{"regular":{"x":0,"y":1680},"shiny":{"x":40,"y":1680}}}},"binacle":{".":{".":{"regular":{"x":80,"y":1680},"shiny":{"x":120,"y":1680}}}},"barbaracle":{".":{".":{"regular":{"x":160,"y":1680},"shiny":{"x":240,"y":1680}},"right":{"regular":{"x":200,"y":1680},"shiny":{"x":280,"y":1680}}}},"skrelp":{".":{".":{"regular":{"x":320,"y":1680},"shiny":{"x":360,"y":1680}}}},"dragalge":{".":{".":{"regular":{"x":400,"y":1680},"shiny":{"x":440,"y":1680}}}},"clauncher":{".":{".":{"regular":{"x":480,"y":1680},"shiny":{"x":560,"y":1680}},"right":{"regular":{"x":520,"y":1680},"shiny":{"x":600,"y":1680}}}},"clawitzer":{".":{".":{"regular":{"x":640,"y":1680},"shiny":{"x":720,"y":1680}},"right":{"regular":{"x":680,"y":1680},"shiny":{"x":760,"y":1680}}}},"helioptile":{".":{".":{"regular":{"x":800,"y":1680},"shiny":{"x":840,"y":1680}}}},"heliolisk":{".":{".":{"regular":{"x":880,"y":1680},"shiny":{"x":920,"y":1680}}}},"tyrunt":{".":{".":{"regular":{"x":960,"y":1680},"shiny":{"x":1000,"y":1680}}}},"tyrantrum":{".":{".":{"regular":{"x":1040,"y":1680},"shiny":{"x":1080,"y":1680}}}},"amaura":{".":{".":{"regular":{"x":1120,"y":1680},"shiny":{"x":1160,"y":1680}}}},"aurorus":{".":{".":{"regular":{"x":1200,"y":1680},"shiny":{"x":1240,"y":1680}}}},"sylveon":{".":{".":{"regular":{"x":0,"y":1710},"shiny":{"x":80,"y":1710}},"right":{"regular":{"x":40,"y":1710},"shiny":{"x":120,"y":1710}}}},"hawlucha":{".":{".":{"regular":{"x":160,"y":1710},"shiny":{"x":200,"y":1710}}}},"dedenne":{".":{".":{"regular":{"x":240,"y":1710},"shiny":{"x":280,"y":1710}}}},"carbink":{".":{".":{"regular":{"x":320,"y":1710},"shiny":{"x":360,"y":1710}}}},"goomy":{".":{".":{"regular":{"x":400,"y":1710},"shiny":{"x":440,"y":1710}}}},"sliggoo":{".":{".":{"regular":{"x":480,"y":1710},"shiny":{"x":520,"y":1710}}}},"goodra":{".":{".":{"regular":{"x":560,"y":1710},"shiny":{"x":600,"y":1710}}}},"klefki":{".":{".":{"regular":{"x":640,"y":1710},"shiny":{"x":720,"y":1710}},"right":{"regular":{"x":680,"y":1710},"shiny":{"x":760,"y":1710}}}},"phantump":{".":{".":{"regular":{"x":800,"y":1710},"shiny":{"x":840,"y":1710}}}},"trevenant":{".":{".":{"regular":{"x":880,"y":1710},"shiny":{"x":920,"y":1710}}}},"pumpkaboo":{".":{".":{"regular":{"x":960,"y":1710},"shiny":{"x":1000,"y":1710}}},"average":{".":{"regular":{"x":960,"y":1710},"shiny":{"x":1000,"y":1710}}},"large":{".":{"regular":{"x":960,"y":1710},"shiny":{"x":1000,"y":1710}}},"small":{".":{"regular":{"x":960,"y":1710},"shiny":{"x":1000,"y":1710}}},"super":{".":{"regular":{"x":960,"y":1710},"shiny":{"x":1000,"y":1710}}}},"gourgeist":{".":{".":{"regular":{"x":1040,"y":1710},"shiny":{"x":1080,"y":1710}}},"average":{".":{"regular":{"x":1040,"y":1710},"shiny":{"x":1080,"y":1710}}},"large":{".":{"regular":{"x":1040,"y":1710},"shiny":{"x":1080,"y":1710}}},"small":{".":{"regular":{"x":1040,"y":1710},"shiny":{"x":1080,"y":1710}}},"super":{".":{"regular":{"x":1040,"y":1710},"shiny":{"x":1080,"y":1710}}}},"bergmite":{".":{".":{"regular":{"x":1120,"y":1710},"shiny":{"x":1160,"y":1710}}}},"avalugg":{".":{".":{"regular":{"x":1200,"y":1710},"shiny":{"x":1240,"y":1710}}}},"noibat":{".":{".":{"regular":{"x":0,"y":1740},"shiny":{"x":40,"y":1740}}}},"noivern":{".":{".":{"regular":{"x":80,"y":1740},"shiny":{"x":120,"y":1740}}}},"xerneas":{".":{".":{"regular":{"x":160,"y":1740},"shiny":{"x":200,"y":1740}}},"active":{".":{"regular":{"x":160,"y":1740},"shiny":{"x":200,"y":1740}}},"neutral":{".":{"regular":{"x":240,"y":1740},"shiny":{"x":280,"y":1740}}}},"yveltal":{".":{".":{"regular":{"x":320,"y":1740},"shiny":{"x":360,"y":1740}}}},"zygarde":{".":{".":{"regular":{"x":400,"y":1740},"shiny":{"x":480,"y":1740}},"right":{"regular":{"x":440,"y":1740},"shiny":{"x":520,"y":1740}}}},"diancie":{".":{".":{"regular":{"x":560,"y":1740},"shiny":{"x":600,"y":1740}}}},"hoopa":{".":{".":{"regular":{"x":640,"y":1740},"shiny":{"x":680,"y":1740}}}},"volcanion":{".":{".":{"regular":{"x":720,"y":1740},"shiny":{"x":760,"y":1740}}}}},"etc":{"egg":{"x":0,"y":1770,"w":40,"h":30},"unknown-pkmn":{"x":40,"y":1770,"w":40,"h":30},"unknown-item":{"x":450,"y":1832,"w":30,"h":30},"ball-mega":{"x":870,"y":2252,"w":16,"h":16},"ball-fainted":{"x":886,"y":2252,"w":14,"h":14},"ball-normal":{"x":900,"y":2252,"w":14,"h":14},"ball-null":{"x":914,"y":2252,"w":14,"h":14},"ball-sick":{"x":928,"y":2252,"w":14,"h":14}},"body-style":{"bipedal-tailed":{"x":0,"y":1800},"bipedal-tailless":{"x":32,"y":1800},"fins":{"x":64,"y":1800},"head-arms":{"x":96,"y":1800},"head-base":{"x":128,"y":1800},"head-legs":{"x":160,"y":1800},"head":{"x":192,"y":1800},"insectoid":{"x":224,"y":1800},"multiple":{"x":256,"y":1800},"quadruped":{"x":288,"y":1800},"serpentine":{"x":320,"y":1800},"tentacles":{"x":352,"y":1800},"wings-multiple":{"x":384,"y":1800},"wings-single":{"x":416,"y":1800}},"apricorn":{"black":{"x":448,"y":1800},"blue":{"x":478,"y":1800},"green":{"x":508,"y":1800},"pink":{"x":538,"y":1800},"red":{"x":568,"y":1800},"white":{"x":598,"y":1800},"yellow":{"x":628,"y":1800}},"battle-item":{"dire-hit":{"x":658,"y":1800},"guard-spec":{"x":688,"y":1800},"x-accuracy":{"x":718,"y":1800},"x-attack":{"x":748,"y":1800},"x-defense":{"x":778,"y":1800},"x-sp-atk":{"x":808,"y":1800},"x-sp-def":{"x":838,"y":1800},"x-speed":{"x":868,"y":1800}},"berry":{"aguav":{"x":898,"y":1800},"apicot":{"x":928,"y":1800},"aspear":{"x":958,"y":1800},"babiri":{"x":988,"y":1800},"belue":{"x":1018,"y":1800},"bluk":{"x":1048,"y":1800},"charti":{"x":1078,"y":1800},"cheri":{"x":1108,"y":1800},"chesto":{"x":1138,"y":1800},"chilan":{"x":1168,"y":1800},"chople":{"x":1198,"y":1800},"coba":{"x":1228,"y":1800},"colbur":{"x":80,"y":1770},"cornn":{"x":110,"y":1770},"custap":{"x":140,"y":1770},"durin":{"x":170,"y":1770},"enigma":{"x":200,"y":1770},"figy":{"x":230,"y":1770},"ganlon":{"x":260,"y":1770},"grepa":{"x":290,"y":1770},"haban":{"x":320,"y":1770},"hondew":{"x":350,"y":1770},"iapapa":{"x":380,"y":1770},"jaboca":{"x":410,"y":1770},"kasib":{"x":440,"y":1770},"kebia":{"x":470,"y":1770},"kee":{"x":500,"y":1770},"kelpsy":{"x":530,"y":1770},"lansat":{"x":560,"y":1770},"leppa":{"x":590,"y":1770},"liechi":{"x":620,"y":1770},"lum":{"x":650,"y":1770},"mago":{"x":680,"y":1770},"magost":{"x":710,"y":1770},"maranga":{"x":740,"y":1770},"micle":{"x":770,"y":1770},"nanab":{"x":800,"y":1770},"nomel":{"x":830,"y":1770},"occa":{"x":860,"y":1770},"oran":{"x":890,"y":1770},"pamtre":{"x":920,"y":1770},"passho":{"x":950,"y":1770},"payapa":{"x":980,"y":1770},"pecha":{"x":1010,"y":1770},"persim":{"x":1040,"y":1770},"petaya":{"x":1070,"y":1770},"pinap":{"x":1100,"y":1770},"pomeg":{"x":1130,"y":1770},"qualot":{"x":1160,"y":1770},"rabuta":{"x":1190,"y":1770},"rawst":{"x":1220,"y":1770},"razz":{"x":1250,"y":1770},"rindo":{"x":0,"y":1832},"roseli":{"x":30,"y":1832},"rowap":{"x":60,"y":1832},"salac":{"x":90,"y":1832},"shuca":{"x":120,"y":1832},"sitrus":{"x":150,"y":1832},"spelon":{"x":180,"y":1832},"starf":{"x":210,"y":1832},"tamato":{"x":240,"y":1832},"tanga":{"x":270,"y":1832},"wacan":{"x":300,"y":1832},"watmel":{"x":330,"y":1832},"wepear":{"x":360,"y":1832},"wiki":{"x":390,"y":1832},"yache":{"x":420,"y":1832}},"ev-item":{"macho-brace":{"x":480,"y":1832},"power-anklet":{"x":510,"y":1832},"power-band":{"x":540,"y":1832},"power-belt":{"x":570,"y":1832},"power-bracer":{"x":600,"y":1832},"power-lens":{"x":630,"y":1832},"power-weight":{"x":660,"y":1832}},"evo-item":{"dawn-stone":{"x":690,"y":1832},"deep-sea-scale":{"x":720,"y":1832},"deep-sea-tooth":{"x":750,"y":1832},"dragon-scale":{"x":780,"y":1832},"dubious-disc":{"x":810,"y":1832},"dusk-stone":{"x":840,"y":1832},"electirizer":{"x":870,"y":1832},"everstone":{"x":900,"y":1832},"fire-stone":{"x":930,"y":1832},"kings-rock":{"x":960,"y":1832},"leaf-stone":{"x":990,"y":1832},"magmarizer":{"x":1020,"y":1832},"metal-coat":{"x":1050,"y":1832},"moon-stone":{"x":1080,"y":1832},"oval-stone":{"x":1110,"y":1832},"prism-scale":{"x":1140,"y":1832},"protector":{"x":1170,"y":1832},"razor-claw":{"x":1200,"y":1832},"razor-fang":{"x":1230,"y":1832},"reaper-cloth":{"x":0,"y":1862},"sachet":{"x":30,"y":1862},"shiny-stone":{"x":60,"y":1862},"sun-stone":{"x":90,"y":1862},"thunder-stone":{"x":120,"y":1862},"up-grade":{"x":150,"y":1862},"water-stone":{"x":180,"y":1862},"whipped-dream":{"x":210,"y":1862}},"flute":{"black":{"x":240,"y":1862},"blue":{"x":270,"y":1862},"red":{"x":300,"y":1862},"white":{"x":330,"y":1862},"yellow":{"x":360,"y":1862}},"fossil":{"armor":{"x":390,"y":1862},"claw":{"x":420,"y":1862},"cover":{"x":450,"y":1862},"dome":{"x":480,"y":1862},"helix":{"x":510,"y":1862},"jaw":{"x":540,"y":1862},"plume":{"x":570,"y":1862},"root":{"x":600,"y":1862},"sail":{"x":630,"y":1862},"skull":{"x":660,"y":1862}},"gem":{"bug":{"x":690,"y":1862},"dark":{"x":720,"y":1862},"dragon":{"x":750,"y":1862},"electric":{"x":780,"y":1862},"fairy":{"x":810,"y":1862},"fighting":{"x":840,"y":1862},"fire":{"x":870,"y":1862},"flying":{"x":900,"y":1862},"ghost":{"x":930,"y":1862},"grass":{"x":960,"y":1862},"ground":{"x":990,"y":1862},"ice":{"x":1020,"y":1862},"normal":{"x":1050,"y":1862},"poison":{"x":1080,"y":1862},"psychic":{"x":1110,"y":1862},"rock":{"x":1140,"y":1862},"steel":{"x":1170,"y":1862},"water":{"x":1200,"y":1862}},"hm":{"fighting":{"x":1230,"y":1862},"flying":{"x":0,"y":1892},"normal":{"x":30,"y":1892},"water":{"x":60,"y":1892}},"hold-item":{"absorb-bulb":{"x":90,"y":1892},"adamant-orb":{"x":120,"y":1892},"air-balloon":{"x":150,"y":1892},"amulet-coin":{"x":180,"y":1892},"assault-vest":{"x":210,"y":1892},"big-root":{"x":240,"y":1892},"binding-band":{"x":270,"y":1892},"black-belt":{"x":300,"y":1892},"black-glasses":{"x":330,"y":1892},"black-sludge":{"x":360,"y":1892},"bright-powder":{"x":390,"y":1892},"burn-drive":{"x":420,"y":1892},"cell-battery":{"x":450,"y":1892},"charcoal":{"x":480,"y":1892},"chill-drive":{"x":510,"y":1892},"choice-band":{"x":540,"y":1892},"choice-scarf":{"x":570,"y":1892},"choice-specs":{"x":600,"y":1892},"cleanse-tag":{"x":630,"y":1892},"damp-rock":{"x":660,"y":1892},"destiny-knot":{"x":690,"y":1892},"douse-drive":{"x":720,"y":1892},"dragon-fang":{"x":750,"y":1892},"eject-button":{"x":780,"y":1892},"eviolite":{"x":810,"y":1892},"expert-belt":{"x":840,"y":1892},"flame-orb":{"x":870,"y":1892},"float-stone":{"x":900,"y":1892},"focus-band":{"x":930,"y":1892},"focus-sash":{"x":960,"y":1892},"grip-claw":{"x":990,"y":1892},"griseous-orb":{"x":1020,"y":1892},"hard-stone":{"x":1050,"y":1892},"heat-rock":{"x":1080,"y":1892},"icy-rock":{"x":1110,"y":1892},"kings-rock":{"x":1140,"y":1892},"lagging-tail":{"x":1170,"y":1892},"leftovers":{"x":1200,"y":1892},"life-orb":{"x":1230,"y":1892},"light-ball":{"x":0,"y":1922},"light-clay":{"x":30,"y":1922},"lucky-egg":{"x":60,"y":1922},"lucky-punch":{"x":90,"y":1922},"luminous-moss":{"x":120,"y":1922},"lustrous-orb":{"x":150,"y":1922},"magnet":{"x":180,"y":1922},"mental-herb":{"x":210,"y":1922},"metal-coat":{"x":240,"y":1922},"metal-powder":{"x":270,"y":1922},"metronome":{"x":300,"y":1922},"miracle-seed":{"x":330,"y":1922},"muscle-band":{"x":360,"y":1922},"mystic-water":{"x":390,"y":1922},"never-melt-ice":{"x":420,"y":1922},"poison-barb":{"x":450,"y":1922},"power-herb":{"x":480,"y":1922},"quick-claw":{"x":510,"y":1922},"quick-powder":{"x":540,"y":1922},"red-card":{"x":570,"y":1922},"ring-target":{"x":600,"y":1922},"rocky-helmet":{"x":630,"y":1922},"safety-goggles":{"x":660,"y":1922},"scope-lens":{"x":690,"y":1922},"sharp-beak":{"x":720,"y":1922},"shed-shell":{"x":750,"y":1922},"shell-bell":{"x":780,"y":1922},"shock-drive":{"x":810,"y":1922},"silk-scarf":{"x":840,"y":1922},"silver-powder":{"x":870,"y":1922},"smoke-ball":{"x":900,"y":1922},"smooth-rock":{"x":930,"y":1922},"snowball":{"x":960,"y":1922},"soft-sand":{"x":990,"y":1922},"soul-dew":{"x":1020,"y":1922},"spell-tag":{"x":1050,"y":1922},"stick":{"x":1080,"y":1922},"sticky-barb":{"x":1110,"y":1922},"thick-club":{"x":1140,"y":1922},"toxic-orb":{"x":1170,"y":1922},"twisted-spoon":{"x":1200,"y":1922},"weakness-policy":{"x":1230,"y":1922},"white-herb":{"x":0,"y":1952},"wide-lens":{"x":30,"y":1952},"wise-glasses":{"x":60,"y":1952},"zoom-lens":{"x":90,"y":1952}},"incense":{"full":{"x":120,"y":1952},"lax":{"x":150,"y":1952},"luck":{"x":180,"y":1952},"odd":{"x":210,"y":1952},"pure":{"x":240,"y":1952},"rock":{"x":270,"y":1952},"rose":{"x":300,"y":1952},"sea":{"x":330,"y":1952},"wave":{"x":360,"y":1952}},"other-item":{"discount-coupon":{"x":390,"y":1952},"escape-rope":{"x":420,"y":1952},"fluffy-tail":{"x":450,"y":1952},"heart-scale":{"x":480,"y":1952},"honey":{"x":510,"y":1952},"max-repel":{"x":540,"y":1952},"odd-keystone":{"x":570,"y":1952},"pass-orb":{"x":600,"y":1952},"poke-doll":{"x":630,"y":1952},"poke-toy":{"x":660,"y":1952},"repel":{"x":690,"y":1952},"soothe-bell":{"x":720,"y":1952},"strange-souvenir":{"x":750,"y":1952},"super-repel":{"x":780,"y":1952}},"key-item":{"acro-bike":{"x":810,"y":1952},"adventure-rules":{"x":840,"y":1952},"apricorn-box":{"x":870,"y":1952},"auroraticket":{"x":900,"y":1952},"azure-flute":{"x":930,"y":1952},"basement-key":{"x":960,"y":1952},"berry-pots":{"x":990,"y":1952},"berry-pouch":{"x":1020,"y":1952},"bicycle-turquoise":{"x":1050,"y":1952},"bicycle-yellow":{"x":1080,"y":1952},"bicycle":{"x":1110,"y":1952},"bike-voucher":{"x":1140,"y":1952},"blue-card":{"x":1170,"y":1952},"blue-orb-gen3":{"x":1200,"y":1952},"blue-orb":{"x":1230,"y":1952},"card-key-gen3":{"x":0,"y":1982},"card-key":{"x":30,"y":1982},"clear-bell":{"x":60,"y":1982},"coin-case":{"x":90,"y":1982},"colress-machine":{"x":120,"y":1982},"common-stone":{"x":150,"y":1982},"contest-pass":{"x":180,"y":1982},"coupon-1":{"x":210,"y":1982},"coupon-2":{"x":240,"y":1982},"coupon-3":{"x":270,"y":1982},"dark-stone":{"x":300,"y":1982},"data-card":{"x":330,"y":1982},"devon-goods":{"x":360,"y":1982},"devon-scope":{"x":390,"y":1982},"dna-splicers":{"x":420,"y":1982},"dowsing-machine-gen5":{"x":450,"y":1982},"dowsing-machine":{"x":480,"y":1982},"dragon-skull":{"x":510,"y":1982},"dropped-item-red":{"x":540,"y":1982},"dropped-item-yellow":{"x":570,"y":1982},"dropped-item":{"x":600,"y":1982},"elevator-key":{"x":630,"y":1982},"enigma-stone":{"x":660,"y":1982},"eon-ticket":{"x":690,"y":1982},"exp-share":{"x":720,"y":1982},"explorer-kit":{"x":750,"y":1982},"fame-checker":{"x":780,"y":1982},"fashion-case":{"x":810,"y":1982},"galactic-key":{"x":840,"y":1982},"gb-sounds":{"x":870,"y":1982},"go-goggles":{"x":900,"y":1982},"god-stone":{"x":930,"y":1982},"gold-teeth":{"x":960,"y":1982},"good-rod":{"x":990,"y":1982},"gracidea":{"x":1020,"y":1982},"gram-1":{"x":1050,"y":1982},"gram-2":{"x":1080,"y":1982},"gram-3":{"x":1110,"y":1982},"grubby-hanky":{"x":1140,"y":1982},"holo-caster-green":{"x":1170,"y":1982},"holo-caster-red":{"x":1200,"y":1982},"holo-caster":{"x":1230,"y":1982},"honor-of-kalos":{"x":0,"y":2012},"intriguing-stone":{"x":30,"y":2012},"itemfinder":{"x":60,"y":2012},"jade-orb":{"x":90,"y":2012},"journal":{"x":120,"y":2012},"lens-case":{"x":150,"y":2012},"letter":{"x":180,"y":2012},"liberty-pass":{"x":210,"y":2012},"lift-key":{"x":240,"y":2012},"light-stone":{"x":270,"y":2012},"lock-capsule-gen4":{"x":300,"y":2012},"lock-capsule":{"x":330,"y":2012},"looker-ticket":{"x":360,"y":2012},"loot-sack":{"x":390,"y":2012},"lost-item-mimejr":{"x":420,"y":2012},"lost-item":{"x":450,"y":2012},"lunar-wing":{"x":480,"y":2012},"mach-bike":{"x":510,"y":2012},"machine-part":{"x":540,"y":2012},"magma-emblem":{"x":570,"y":2012},"magma-stone":{"x":600,"y":2012},"medal-box":{"x":630,"y":2012},"mega-ring":{"x":660,"y":2012},"member-card":{"x":690,"y":2012},"meteorite":{"x":720,"y":2012},"mystery-egg":{"x":750,"y":2012},"mysticticket":{"x":780,"y":2012},"oaks-letter":{"x":810,"y":2012},"oaks-parcel":{"x":840,"y":2012},"old-amber":{"x":870,"y":2012},"old-charm":{"x":900,"y":2012},"old-rod":{"x":930,"y":2012},"old-sea-map":{"x":960,"y":2012},"oval-charm":{"x":990,"y":2012},"pal-pad":{"x":1020,"y":2012},"parcel":{"x":1050,"y":2012},"pass":{"x":1080,"y":2012},"permit":{"x":1110,"y":2012},"photo-album":{"x":1140,"y":2012},"plasma-card":{"x":1170,"y":2012},"poffin-case":{"x":1200,"y":2012},"point-card":{"x":1230,"y":2012},"poke-flute-gen3":{"x":0,"y":2042},"poke-flute":{"x":30,"y":2042},"poke-radar":{"x":60,"y":2042},"pokeblock-case":{"x":90,"y":2042},"powder-jar":{"x":120,"y":2042},"power-plant-pass":{"x":150,"y":2042},"profs-letter":{"x":180,"y":2042},"prop-case":{"x":210,"y":2042},"rainbow-pass":{"x":240,"y":2042},"rainbow-wing":{"x":270,"y":2042},"red-chain":{"x":300,"y":2042},"red-orb-gen3":{"x":330,"y":2042},"red-orb":{"x":360,"y":2042},"red-scale":{"x":390,"y":2042},"reveal-glass":{"x":420,"y":2042},"rm-1-key":{"x":450,"y":2042},"rm-2-key":{"x":480,"y":2042},"rm-4-key":{"x":510,"y":2042},"rm-6-key":{"x":540,"y":2042},"roller-skates":{"x":570,"y":2042},"ruby":{"x":600,"y":2042},"rule-book":{"x":630,"y":2042},"sapphire":{"x":660,"y":2042},"scanner":{"x":690,"y":2042},"seal-bag":{"x":720,"y":2042},"seal-case":{"x":750,"y":2042},"secret-key-gen3":{"x":780,"y":2042},"secret-key":{"x":810,"y":2042},"secret-potion":{"x":840,"y":2042},"shiny-charm":{"x":870,"y":2042},"silph-scope":{"x":900,"y":2042},"silver-wing":{"x":930,"y":2042},"soot-sack":{"x":960,"y":2042},"sprayduck":{"x":990,"y":2042},"sprinklotad":{"x":1020,"y":2042},"squirt-bottle":{"x":1050,"y":2042},"ss-ticket":{"x":1080,"y":2042},"storage-key-gen3":{"x":1110,"y":2042},"storage-key":{"x":1140,"y":2042},"suite-key":{"x":1170,"y":2042},"super-rod":{"x":1200,"y":2042},"tea":{"x":1230,"y":2042},"teachy-tv":{"x":0,"y":2072},"tidal-bell":{"x":30,"y":2072},"tm-case":{"x":60,"y":2072},"tmv-pass":{"x":90,"y":2072},"town-map-gen3":{"x":120,"y":2072},"town-map":{"x":150,"y":2072},"travel-trunk-gold":{"x":180,"y":2072},"travel-trunk-silver":{"x":210,"y":2072},"tri-pass":{"x":240,"y":2072},"unown-report":{"x":270,"y":2072},"vs-recorder":{"x":300,"y":2072},"vs-seeker":{"x":330,"y":2072},"wailmer-pail":{"x":360,"y":2072},"works-key":{"x":390,"y":2072},"xtransceiver-blue":{"x":420,"y":2072},"xtransceiver-red":{"x":450,"y":2072},"xtransceiver-yellow":{"x":480,"y":2072},"xtransceiver":{"x":510,"y":2072}},"mail":{"air":{"x":540,"y":2072},"bead":{"x":570,"y":2072},"bloom":{"x":600,"y":2072},"brick":{"x":630,"y":2072},"bridge-d":{"x":660,"y":2072},"bridge-m":{"x":690,"y":2072},"bridge-s":{"x":720,"y":2072},"bridge-t":{"x":750,"y":2072},"bridge-v":{"x":780,"y":2072},"bubble":{"x":810,"y":2072},"dream":{"x":840,"y":2072},"fab":{"x":870,"y":2072},"favored":{"x":900,"y":2072},"flame":{"x":930,"y":2072},"glitter":{"x":960,"y":2072},"grass":{"x":990,"y":2072},"greet":{"x":1020,"y":2072},"harbor":{"x":1050,"y":2072},"heart":{"x":1080,"y":2072},"inquiry":{"x":1110,"y":2072},"like":{"x":1140,"y":2072},"mech":{"x":1170,"y":2072},"mosaic":{"x":1200,"y":2072},"orange":{"x":1230,"y":2072},"reply":{"x":0,"y":2102},"retro":{"x":30,"y":2102},"rsvp":{"x":60,"y":2102},"shadow":{"x":90,"y":2102},"snow":{"x":120,"y":2102},"space":{"x":150,"y":2102},"steel":{"x":180,"y":2102},"thanks":{"x":210,"y":2102},"tropic":{"x":240,"y":2102},"tunnel":{"x":270,"y":2102},"wave":{"x":300,"y":2102},"wood":{"x":330,"y":2102}},"medicine":{"ability-capsule":{"x":360,"y":2102},"antidote":{"x":390,"y":2102},"awakening":{"x":420,"y":2102},"berry-juice":{"x":450,"y":2102},"burn-heal":{"x":480,"y":2102},"calcium":{"x":510,"y":2102},"carbos":{"x":540,"y":2102},"casteliacone":{"x":570,"y":2102},"clever-wing":{"x":600,"y":2102},"elixir":{"x":630,"y":2102},"energy-powder":{"x":660,"y":2102},"energy-root":{"x":690,"y":2102},"ether":{"x":720,"y":2102},"fresh-water":{"x":750,"y":2102},"full-heal":{"x":780,"y":2102},"full-restore":{"x":810,"y":2102},"genius-wing":{"x":840,"y":2102},"heal-powder":{"x":870,"y":2102},"health-wing":{"x":900,"y":2102},"hp-up":{"x":930,"y":2102},"hyper-potion":{"x":960,"y":2102},"ice-heal":{"x":990,"y":2102},"iron":{"x":1020,"y":2102},"lava-cookie":{"x":1050,"y":2102},"lemonade":{"x":1080,"y":2102},"lumiose-galette":{"x":1110,"y":2102},"max-elixir":{"x":1140,"y":2102},"max-ether":{"x":1170,"y":2102},"max-potion":{"x":1200,"y":2102},"max-revive":{"x":1230,"y":2102},"moomoo-milk":{"x":0,"y":2132},"muscle-wing":{"x":30,"y":2132},"old-gateau":{"x":60,"y":2132},"paralyze-heal":{"x":90,"y":2132},"potion":{"x":120,"y":2132},"pp-max":{"x":150,"y":2132},"pp-up":{"x":180,"y":2132},"protein":{"x":210,"y":2132},"rage-candy-bar":{"x":240,"y":2132},"rare-candy":{"x":270,"y":2132},"resist-wing":{"x":300,"y":2132},"revival-herb":{"x":330,"y":2132},"revive":{"x":360,"y":2132},"sacred-ash":{"x":390,"y":2132},"shalour-sable":{"x":420,"y":2132},"soda-pop":{"x":450,"y":2132},"super-potion":{"x":480,"y":2132},"sweet-heart":{"x":510,"y":2132},"swift-wing":{"x":540,"y":2132},"zinc":{"x":570,"y":2132}},"mega-stone":{"abomasite":{"x":600,"y":2132},"absolite":{"x":630,"y":2132},"aerodactylite":{"x":660,"y":2132},"aggronite":{"x":690,"y":2132},"alakazite":{"x":720,"y":2132},"ampharosite":{"x":750,"y":2132},"banettite":{"x":780,"y":2132},"blastoisinite":{"x":810,"y":2132},"blazikenite":{"x":840,"y":2132},"charizardite-x":{"x":870,"y":2132},"charizardite-y":{"x":900,"y":2132},"garchompite":{"x":930,"y":2132},"gardevoirite":{"x":960,"y":2132},"gengarite":{"x":990,"y":2132},"gyaradosite":{"x":1020,"y":2132},"heracronite":{"x":1050,"y":2132},"houndoominite":{"x":1080,"y":2132},"kangaskhanite":{"x":1110,"y":2132},"latiasite":{"x":1140,"y":2132},"latiosite":{"x":1170,"y":2132},"lucarionite":{"x":1200,"y":2132},"manectite":{"x":1230,"y":2132},"mawilite":{"x":0,"y":2162},"medichamite":{"x":30,"y":2162},"mewtwonite-x":{"x":60,"y":2162},"mewtwonite-y":{"x":90,"y":2162},"pinsirite":{"x":120,"y":2162},"scizorite":{"x":150,"y":2162},"tyranitarite":{"x":180,"y":2162},"venusaurite":{"x":210,"y":2162}},"mulch":{"amaze":{"x":240,"y":2162},"boost":{"x":270,"y":2162},"damp":{"x":300,"y":2162},"gooey":{"x":330,"y":2162},"growth":{"x":360,"y":2162},"rich":{"x":390,"y":2162},"stable":{"x":420,"y":2162},"surprise":{"x":450,"y":2162}},"plate":{"draco":{"x":480,"y":2162},"dread":{"x":510,"y":2162},"earth":{"x":540,"y":2162},"fist":{"x":570,"y":2162},"flame":{"x":600,"y":2162},"icicle":{"x":630,"y":2162},"insect":{"x":660,"y":2162},"iron":{"x":690,"y":2162},"meadow":{"x":720,"y":2162},"mind":{"x":750,"y":2162},"pixie":{"x":780,"y":2162},"sky":{"x":810,"y":2162},"splash":{"x":840,"y":2162},"spooky":{"x":870,"y":2162},"stone":{"x":900,"y":2162},"toxic":{"x":930,"y":2162},"zap":{"x":960,"y":2162}},"pokeball":{"cherish":{"x":990,"y":2162},"dive":{"x":1020,"y":2162},"dream":{"x":1050,"y":2162},"dusk":{"x":1080,"y":2162},"fast":{"x":1110,"y":2162},"friend":{"x":1140,"y":2162},"great":{"x":1170,"y":2162},"heal":{"x":1200,"y":2162},"heavy":{"x":1230,"y":2162},"level":{"x":0,"y":2192},"love":{"x":30,"y":2192},"lure":{"x":60,"y":2192},"luxury":{"x":90,"y":2192},"master":{"x":120,"y":2192},"moon":{"x":150,"y":2192},"nest":{"x":180,"y":2192},"net":{"x":210,"y":2192},"park":{"x":240,"y":2192},"poke":{"x":270,"y":2192},"premier":{"x":300,"y":2192},"quick":{"x":330,"y":2192},"repeat":{"x":360,"y":2192},"safari":{"x":390,"y":2192},"sport":{"x":420,"y":2192},"timer":{"x":450,"y":2192},"ultra":{"x":480,"y":2192}},"scarf":{"blue":{"x":510,"y":2192},"green":{"x":540,"y":2192},"pink":{"x":570,"y":2192},"red":{"x":600,"y":2192},"yellow":{"x":630,"y":2192}},"shard":{"blue":{"x":660,"y":2192},"green":{"x":690,"y":2192},"red":{"x":720,"y":2192},"yellow":{"x":750,"y":2192}},"tm":{"bug":{"x":780,"y":2192},"dark":{"x":810,"y":2192},"dragon":{"x":840,"y":2192},"electric":{"x":870,"y":2192},"fairy":{"x":900,"y":2192},"fighting":{"x":930,"y":2192},"fire":{"x":960,"y":2192},"flying":{"x":990,"y":2192},"ghost":{"x":1020,"y":2192},"grass":{"x":1050,"y":2192},"ground":{"x":1080,"y":2192},"ice":{"x":1110,"y":2192},"normal":{"x":1140,"y":2192},"poison":{"x":1170,"y":2192},"psychic":{"x":1200,"y":2192},"rock":{"x":1230,"y":2192},"steel":{"x":0,"y":2222},"water":{"x":30,"y":2222}},"valuable-item":{"balm-mushroom":{"x":60,"y":2222},"big-mushroom":{"x":90,"y":2222},"big-nugget":{"x":120,"y":2222},"big-pearl":{"x":150,"y":2222},"comet-shard":{"x":180,"y":2222},"nugget":{"x":210,"y":2222},"pearl-string":{"x":240,"y":2222},"pearl":{"x":270,"y":2222},"pretty-wing":{"x":300,"y":2222},"rare-bone":{"x":330,"y":2222},"relic-band":{"x":360,"y":2222},"relic-copper":{"x":390,"y":2222},"relic-crown":{"x":420,"y":2222},"relic-gold":{"x":450,"y":2222},"relic-silver":{"x":480,"y":2222},"relic-statue":{"x":510,"y":2222},"relic-vase":{"x":540,"y":2222},"shoal-salt":{"x":570,"y":2222},"shoal-shell":{"x":600,"y":2222},"slowpoke-tail":{"x":630,"y":2222},"star-piece":{"x":660,"y":2222},"stardust":{"x":690,"y":2222},"tiny-mushroom":{"x":720,"y":2222}},"wonder-launcher":{"ability-urge":{"x":750,"y":2222},"antidote":{"x":780,"y":2222},"awakening":{"x":810,"y":2222},"burn-heal":{"x":840,"y":2222},"dire-hit-1":{"x":870,"y":2222},"dire-hit-2":{"x":900,"y":2222},"dire-hit-3":{"x":930,"y":2222},"ether":{"x":960,"y":2222},"full-heal":{"x":990,"y":2222},"full-restore":{"x":1020,"y":2222},"guard-spec":{"x":1050,"y":2222},"hyper-potion":{"x":1080,"y":2222},"ice-heal":{"x":1110,"y":2222},"item-drop":{"x":1140,"y":2222},"item-urge":{"x":1170,"y":2222},"max-potion":{"x":1200,"y":2222},"max-revive":{"x":1230,"y":2222},"paralyze-heal":{"x":0,"y":2252},"potion":{"x":30,"y":2252},"reset-urge":{"x":60,"y":2252},"revive":{"x":90,"y":2252},"super-potion":{"x":120,"y":2252},"x-accuracy-1":{"x":150,"y":2252},"x-accuracy-2":{"x":180,"y":2252},"x-accuracy-3":{"x":210,"y":2252},"x-accuracy-6":{"x":240,"y":2252},"x-attack-1":{"x":270,"y":2252},"x-attack-2":{"x":300,"y":2252},"x-attack-3":{"x":330,"y":2252},"x-attack-6":{"x":360,"y":2252},"x-defense-1":{"x":390,"y":2252},"x-defense-2":{"x":420,"y":2252},"x-defense-3":{"x":450,"y":2252},"x-defense-6":{"x":480,"y":2252},"x-sp-atk-1":{"x":510,"y":2252},"x-sp-atk-2":{"x":540,"y":2252},"x-sp-atk-3":{"x":570,"y":2252},"x-sp-atk-6":{"x":600,"y":2252},"x-sp-def-1":{"x":630,"y":2252},"x-sp-def-2":{"x":660,"y":2252},"x-sp-def-3":{"x":690,"y":2252},"x-sp-def-6":{"x":720,"y":2252},"x-speed-1":{"x":750,"y":2252},"x-speed-2":{"x":780,"y":2252},"x-speed-3":{"x":810,"y":2252},"x-speed-6":{"x":840,"y":2252}},"status":{"holding-item":{"x":942,"y":2252},"pentagon":{"x":952,"y":2252},"pokerus-cured":{"x":962,"y":2252},"shiny":{"x":972,"y":2252}}}; 
    
    /**
     * Index linking Pokédex numbers to slugs. Generated on runtime.
     *
     * @type {?Object}
     */
    var pkmn_idx_to_slug;
    
    /**
     * Regular Expression used to check whether an identifier
     * is a valid dex number.
     *
     * @type {?RegExp}
     */
    var numeric_regexp;
    
    /**
     * Schedules the DOM to be processed completely as soon as it's ready.
     */ 
    self["process_dom"] = function()
    {
        self.content_loaded(window, self.process_container);
    }
    
    /**
     * Decorates a list of objects.
     *
     * This is to be called by the user in case they want to decorate
     * specific items without having the script scan the DOM.
     *
     * The argument must either be an ID string (in which case the node
     * is fetched using document.getElementById()), or a node, or
     * an array of ID strings, or an array of nodes.
     *
     * @param {(string|Element|Array.<string, Element>)} val Item or items to be decorated.
     */
    self["decorate"] = function(val)
    {
        // Determine what the user passed.
        var is_arr = self.is_array(val);
        // If it's not an array, turn it into one so we can iterate over it.
        if (is_arr == false) {
            val = [val];
        }
        
        var a, z;
        var obj, node, is_str, is_node;
        for (a = 0, z = val.length; a < z; ++a) {
            obj = val[a];
            is_str = typeof obj == "string" || obj instanceof String;
            is_node = obj.nodeName !== null;
            
            // Fetch the object by its ID if necessary.
            if (is_str) {
                node = document.getElementById(obj);
            }
            else {
                node = obj;
            }
            
            // We either have a parent object that contains icons,
            // or an icon itself.
            if (self.has_class(node, self.PKSPR_BASE_CLASS)) {
                // It's an icon.
                self.decorate_node(node);
            }
            else {
                // It's a parent object.
                self.process_container(null, node);
            }
        }
    }
    
    /**
     * Puts a message in the console in case of decoration failure.
     *
     * @param {Object} attrs The icon attributes.
     */
    self.decoration_error = function(attrs)
    {
        window.console && console.warn("Couldn't decorate icon with the "+
            "following properties: %o", attrs);
    }
    
    /**
     * Decorates a single node
     *
     * @param {Element} node The node to be decorated.
     * @return {boolean} Whether decoration was successful.
     */
    self.decorate_node = function(node)
    {
        // Check to make sure it hasn't been decorated before.
        if (self.is_decorated(node)) {
            return false;
        }
        
        // Get the node's base attributes.
        var attrs = self.get_node_attrs(node);
        var size = self.get_type_size(attrs.type);
        var data = self.get_icon_data(attrs);
        var coords = data.coords;
        var props = data.props;
        
        // If we were not able to gauge its size from the type,
        // that means this icon's size is stored alongside
        // the coordinate data.
        var custom_size = size == null || size.x == null;
        
        // Check whether this node's icon really exists.
        if (coords == null) {
            // If not, error out.
            self.decoration_error(attrs);
            return false;
        }
        if (custom_size) {
            size = {"w": coords.w, "h": coords.h};
        }
        
        // Create the inner element that is the icon itself.
        var inner = self.create_inner_node(node);
        // Set background coordinates.
        self.set_icon_coords(inner, coords);
        // Set the size, if we're dealing with a custom sized icon.
        if (custom_size) {
            self.set_icon_size(node, inner, size);
        }
        // Flip the icon if we're showing a faux right-facing icon.
        if (props.flipped) {
            self.set_icon_direction(node, "right");
        }
        
        // Indicate that this node has been decorated so we don't
        // accidentally decorate it twice.
        self.set_decorated(node);
        
        return true;
    }
    
    /**
     * Adds a class to the icon signifying it is to be mirrored in CSS.
     *
     * @param {Element} node The icon node.
     * @param {string} dir Direction the icon should face.
     */
    self.set_icon_direction = function(node, dir)
    {
        self.add_class(node, "pkspr-faux-"+dir);
    }
    
    /**
     * Creates the inner node, which is an extra child element inside the
     * icon node that contains the actual icon itself.
     *
     * @param {Element} node The icon node.
     * @return {Element} The newly created inner node.
     */
    self.create_inner_node = function(node)
    {
        var inner = document.createElement("i");
        node.appendChild(inner);
        return inner;
    }
    
    /**
     * Sets the background-position value of an icon.
     *
     * @param {Element} inner The inner node (<i> element of the icon object).
     * @param {!Object} coords The coordinates.
     */
    self.set_icon_coords = function(inner, coords)
    {
        inner.style.backgroundPosition = (-coords.x)+"px "+(-coords.y)+"px";
    }
    
    /**
     * Sets the size value of an icon.
     *
     * @param {Element} node The outer node.
     * @param {Element} inner The inner node (<i> element of the icon object).
     * @param {Object} size The size.
     */
    self.set_icon_size = function(node, inner, size)
    {
        node.style.width = (size.w)+"px";
        node.style.height = (size.h)+"px";
        inner.style.width = (size.w)+"px";
        inner.style.height = (size.h)+"px";
    }
    
    /**
     * Returns the coordinates and other properties for the icon.
     *
     * @param {Object} attrs The icon's list of attributes.
     * @return {?Object} The icon's coordinates and properties.
     */
    self.get_icon_data = function(attrs)
    {
        var tree = self.PKSPR_DATA;
        var branch;
        
        // The following list contains fallbacks. If a certain form
        // or variation is not found in the coordinates list, it will
        // either fall back to something from this list, or return an error.
        var attr, val, fbval;
        var fallbacks = {
            "type": null,
            "slug": null,
            "form": ".",
            "dir": ".",
            "color": "regular"
        };
        var props = {
            "flipped": false
        };
        
        for (attr in fallbacks) {
            // Check if we've reached an end node and quit iterating if so.
            if (tree.x >= 0) {
                break;
            }
            
            val = attrs[attr];
            fbval = fallbacks[attr];
            
            // If the value exists in the tree, continue via that branch.
            if (branch = tree[val]) {
                tree = branch;
                continue;
            }
            // If not, continue via the fallback value.
            else
            if (branch = tree[fbval]) {
                tree = branch;
                // If we're reverting from a non-existent right-facing icon,
                // keep note that this icon should be flipped later.
                if (val == "right") {
                    props.flipped = true;
                }
                continue;
            }
            // If the fallback value doesn't exist, error out.
            else {
                tree = null;
                break;
            }
        }
        
        // If all went well, we'll have the coordinates and other properties.
        return {
            coords: tree,
            props: props
        };
    }
    
    /**
     * Returns information about the icon type.
     *
     * @param {string} type The type to retrieve information from.
     * @return {?Object} The type's information.
     */
    self.get_type_size = function(type)
    {
        var spr_type;
        for (spr_type in self.PKSPR_TYPES) {
            if (spr_type == type) {
                return self.PKSPR_TYPES[spr_type];
            }
        }
        return null;
    }
    
    /**
     * Retrieves icon type information from a node's class.
     *
     * @param {Element} node The node to be scanned.
     * @return {?Object} The node's information.
     */
    self.get_node_attrs = function(node)
    {
        // The node's class.
        var node_class = node.className;
        if (node_class == null) {
            return null;
        }
        
        var node_attrs = {
            "type": null,     // e.g. pkmn
            "slug": null,     // e.g. unown
            "color": null,    // regular or shiny
            "form": null,     // e.g. defense, a, exclamation, orange
            "gender": null,   // male, female or genderless
            "dir": null       // left or right
        };
        
        // Aside from these basic variables, we'll also scan for
        // every known icon type. We'll register the type and
        // redirect the values to the appropriate keys.
        var spr_type;
        for (spr_type in self.PKSPR_TYPES) {
            // The key goes to "type", the value to "slug".
            // e.g. pkmn-caterpie yields type: pkmn, slug: caterpie.
            node_attrs[spr_type] = {"k": "type", "v": "slug"};
        }
        
        var a, z;
        var var_idx, var_mapping, var_key, var_val;
        var bit, bits = node_class.split(" ");
        for (a = 0, z = bits.length; a < z; ++a) {
            bit = bits[a];
            // Iterate over all recognized variable types.
            for (var_key in node_attrs) {
                var_mapping = node_attrs[var_key];
                var_idx = bit.indexOf(var_key+"-");
                if (var_idx == 0) {
                    var_val = bit.substring(var_key.length + 1);
                    
                    if (var_mapping === null) {
                        // Color, form, gender and dir are saved to
                        // the node_attrs variable directly.
                        node_attrs[var_key] = var_val;
                    }
                    else {
                        node_attrs[var_mapping.k] = var_key;
                        node_attrs[var_mapping.v] = var_val;
                    }
                }
            }
        }
        
        // Check to see if this is a Pokémon icon that uses the number
        // as the identifier rather than the slug.
        if (node_attrs.type == "pkmn"
        &&  self.is_numeric_pkmn(node_attrs.slug)) {
            // Replace the index number with the slug.
            node_attrs.slug = pkmn_idx_to_slug[node_attrs.slug];
        }
        
        // Clean the output up a bit.
        for (spr_type in self.PKSPR_TYPES) {
            delete node_attrs[spr_type];
        }
        
        return node_attrs;
    }
    
    /**
     * Compiles a regular expression for use by PkSpr.is_numeric_pkmn().
     */
    self.prepare_numeric_check = function()
    {
        if (numeric_regexp != undefined) {
            return;
        }
        // 000 is always false.
        numeric_regexp = new RegExp(/(?!000)^[0-9]{3}$/);
    }
    
    /**
     * Generates a list of Pokédex numbers linked to their respective slugs.
     */
    self.generate_idx_list = function()
    {
        var a, z, pkmn;
        
        if (pkmn_idx_to_slug != undefined) {
            return;
        }
        pkmn_idx_to_slug = {};
        
        // In case we don't have any Pokémon icons in this compile.
        if (self.PKSPR_DATA == null
        ||  self.PKSPR_DATA.pkmn == null) {
            return;
        }
        
        pkmn = Object.keys(self.PKSPR_DATA.pkmn);
        for (a = 1, z = pkmn.length; a <= z; ++a) {
            // Fast zero-padding hardcoded to work for 3 digits.
            pkmn_idx_to_slug[("000"+a).slice(-3)] = pkmn[a - 1];
        }
    }
    
    /**
     * Determines whether a Pokémon identifier is a dex number or not.
     *
     * @param {?string} pkmn The Pokémon identifier (slug or ID).
     * @return {boolean} Whether it is or isn't a numeric identifier.
     */
    self.is_numeric_pkmn = function(pkmn)
    {
        return numeric_regexp.test(pkmn);
    }
    
    /**
     * Determines whether something is an array.
     *
     * @param {?} something The object.
     * @return {boolean} Whether the object is an array.
     */
    self.is_array = function(something)
    {
        return toString.call(something) === "[object Array]";
    }
    
    /**
     * Decorates all icons found in the parent object.
     *
     * If decorating the entire DOM (document as parent object),
     * this function should be run as a callback from PkSpr.content_loaded().
     *
     * @param {*} caller Calling object (if callback).
     * @param {HTMLDocument|Element} parent Parent object.
     */
    self.process_container = function(caller, parent)
    {
        if (parent == null) {
            parent = document;
        }
        
        var a;
        var elements = self.get_icon_elements(parent);
        for (a = 0; a < elements.length; ++a) {
            self.decorate_node(elements[a]);
        }
    }
    
    /**
     * Retrieves all elements in the DOM that can be decorated.
     *
     * @param {HTMLDocument|Element} parent The parent element to search in.
     */
    self.get_icon_elements = function(parent)
    {
        if (parent == null) {
            parent = document;
        }
        
        // We'll attempt to use document.querySelectorAll() first.
        // If it's not available, we'll do our own check.
        try {
            return parent.querySelectorAll(
                "span."+self.PKSPR_BASE_CLASS+","+
                "div."+self.PKSPR_BASE_CLASS
            );
        }
        catch(e) {}
        
        // Can't use document.querySelectorAll(), so we'll do this
        // the hard way. Grab all elements of those types and check for the
        // base identifier class.
        var a, b;
        var result, results, elements = [];
        var types = ["span", "div"];
        for (a = 0; a < types.length; ++a) {
            results = parent.getElementsByTagName(types[a]);
            for (b = 0; b < results.length; ++b) {
                result = results[b];
                if (self.has_class(result, self.PKSPR_BASE_CLASS)) {
                    elements.push(result);
                }
            }
        }
        return elements;
    }
    
    /**
     * Checks if an DOM element has already been decorated before.
     *
     * @param {Element} element The element to check.
     * @return {boolean} Whether the element has been decorated.
     */
    self.is_decorated = function(element)
    {
        return self.has_class(element, self.PKSPR_BASE_CLASS+"-decorated");
    }
    
    /**
     * Adds a class to an item that indicates it has been decorated already.
     *
     * @param {Element} element The element to set.
     */
    self.set_decorated = function(element)
    {
        self.add_class(element, " "+self.PKSPR_BASE_CLASS+"-decorated");
    }
    
    /**
     * Adds a class to a DOM element.
     *
     * @param {Element} element The element to add a class to.
     * @param {string} cls The class name to add.
     */
    self.add_class = function(element, cls)
    {
        element.className += " "+cls;
    }
    
    /**
     * Checks if an DOM element has a specific class.
     *
     * @param {Element} element The element to check.
     * @param {string} cls The class name to check for.
     * @return {boolean} Whether the element has the class.
     */
    self.has_class = function(element, cls)
    {
        return (" "+element.className+" ").indexOf(" "+cls+" ") > -1;
    }
    
    /**
     * Cross-browser DOMContentLoaded wrapper (version 1.2)
     *
     * Takes a window object and function; the function is executed after
     * DOM is loaded and ready, regardless of the browser used.
     * 
     * Written by Diego Perini <diego.perini@gmail.com> and released under
     * the MIT license. Slightly modified for this project. For more
     * information, see <https://github.com/dperini/ContentLoaded>.
     *
     * @param {Window} win Window object.
     * @param {function(...)} fn Function to execute.
     */
    self.content_loaded = function(win, fn)
    {
        var done = false, top = true,
    
        doc = win.document, root = doc.documentElement,
    
        add = doc.addEventListener ? "addEventListener" : "attachEvent",
        rem = doc.addEventListener ? "removeEventListener" : "detachEvent",
        pre = doc.addEventListener ? "" : "on",
    
        init = function(e)
        {
            if (e.type == "readystatechange" && doc.readyState != "complete") {
                return;
            }
            (e.type == "load" ? win : doc)[rem](pre + e.type, init, false);
            if (!done && (done = true)) {
                fn.call(win, e.type || e);
            }
        },
    
        poll = function()
        {
            try {
                root.doScroll("left");
            }
            catch(e) {
                setTimeout(poll, 50); return;
            }
            init("poll");
        };
    
        if (doc.readyState == "complete") {
            fn.call(win, "lazy");
        }
        else {
            if (doc.createEventObject && root.doScroll) {
                try {
                    top = !win.frameElement;
                }
                catch(e) {
                }
                if (top) {
                    poll();
                }
            }
            doc[add](pre+"DOMContentLoaded", init, false);
            doc[add](pre+"readystatechange", init, false);
            win[add](pre+"load", init, false);
        }
    }
    
    /**
     * Runs a couple of initialization functions.
     */
    self.initialize = function()
    {
        // Compile our numeric check regular expression.
        self.prepare_numeric_check();
        // Generate a list of slugs by Pokédex number.
        self.generate_idx_list();
    }()
    
    return self;
})();


/**
 * Object.keys() prototype method polyfill (simplified).
 *
 * For compatibility purposes, we'll define a polyfill so older browsers
 * won't choke on Object.keys(), which the code requires.
 *
 * Source: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys>
 */
if (!Object.keys) {
    Object.keys = (function()
    {
        "use strict";
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        
        return function(obj)
        {
            if (typeof obj !== "object" && (typeof obj !== "function" || obj === null)) {
                throw new TypeError("Object.keys called on non-object");
            }
            
            var result = [], prop, i;

            for (prop in obj) {
                if (hasOwnProperty.call(obj, prop)) {
                    result.push(prop);
                }
            }
            
            return result;
        };
    }());
}

/* All done. */
})();