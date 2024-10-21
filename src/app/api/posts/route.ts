import { NextRequest, NextResponse } from 'next/server'
import { getRequestContext } from '@cloudflare/next-on-pages'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
    let responseJson = {posts: [
        {
            "id": "post-001",
            "title": "Avaruusolentojen Salattu Historia",
            "author": "Matti Virtanen",
            "date": "2024-10-01",
            "summary": "Tutkimme avaruusolentojen historiaa ja heidän mahdollisia kohtaamisiaan ihmiskunnan kanssa.",
            "content": "Avaruusolennot ovat kiehtoneet ihmisiä vuosisatojen ajan. Monet uskovat, että maapallolla on käynyt ulkoavaruuden vierailijoita jo tuhansia vuosia sitten. Tässä blogipostauksessa syvennymme arkeologisiin löytöihin, vanhoihin legendoihin ja nykyaikaisiin UFO-havaintoihin. Onko avaruusolentoja todella olemassa, vai onko kyse vain mielikuvituksen tuotteista?"
        },
        {
            "id": "post-002",
            "title": "Noituuden Paluu: Modernit Noidat",
            "author": "Elina Lehtinen",
            "date": "2024-09-25",
            "summary": "Miten noituus on kehittynyt ja minkälaisia rituaaleja modernit noidat käyttävät tänä päivänä?",
            "content": "Noituus ei ole vain menneisyyden ilmiö – se elää ja voi hyvin myös nykyajassa. Modernit noidat hyödyntävät perinteisiä rituaaleja, mutta myös uusia elementtejä, kuten kristalleja ja energiahoitoja. Tässä postauksessa käsittelemme, miten nykynoidat harjoittavat noituutta, ja mitä tämä tarkoittaa nykyaikaisessa yhteiskunnassa."
        },
        {
            "id": "post-003",
            "title": "UFO-havainnot Suomessa: Totta vai Tarua?",
            "author": "Pekka Hiltunen",
            "date": "2024-09-15",
            "summary": "Katsaus tunnetuimpiin UFO-havaintoihin Suomessa ja niiden mahdollisiin selityksiin.",
            "content": "Suomessa on raportoitu lukuisia UFO-havaintoja vuosien varrella, mutta mikä on niiden todellinen luonne? Tässä artikkelissa tutkimme Suomen tunnetuimpia UFO-tapauksia, haastattelemme silminnäkijöitä ja arvioimme mahdollisia tieteellisiä selityksiä. Onko avaruusolentoja todella nähty, vai onko kyseessä vain luonnonilmiöt tai harhat?"
        },
        {
            "id": "post-004",
            "title": "Noituuden Salaisuudet: Taikuutta Arjessa",
            "author": "Laura Korhonen",
            "date": "2024-08-30",
            "summary": "Kuinka nykyaikaiset noidat käyttävät taikuutta arjessaan ja mikä merkitys sillä on heidän elämälleen?",
            "content": "Noituus on monille elämäntapa, joka ulottuu arjen pieniin hetkiin. Nykynoidat voivat valmistaa kotitekoisia loitsuja, harjoittaa tarot-korttien lukemista tai käyttää yrttejä rituaaleissaan. Tämä blogipostaus avaa taikuuden käytön saloja ja kertoo, kuinka kuka tahansa voi omaksua noituuden elementtejä omaan elämäänsä."
        },
        {
            "id": "post-005",
            "title": "Avaruusolentojen Vaikutus Popkulttuuriin",
            "author": "Sami Laaksonen",
            "date": "2024-08-20",
            "summary": "Miten avaruusolennot ovat vaikuttaneet elokuviin, kirjallisuuteen ja televisioon?",
            "content": "Avaruusolennot ovat olleet keskeinen teema popkulttuurissa jo vuosikymmeniä. Elokuvista kuten 'E.T.' ja 'Independence Day' lähtien aina scifi-kirjallisuuteen, ulkoavaruuden olennot ovat kiehtoneet ihmisten mielikuvitusta. Tämä postaus käsittelee avaruusolentojen kuvastoa ja pohdintoja siitä, miksi ne ovat niin suosittuja fiktiivisessä maailmassa."
        },
        {
            "id": "post-006",
            "title": "Avaruusolentojen ja Hallitusten Salaliitot",
            "author": "Henri Salminen",
            "date": "2024-07-15",
            "summary": "Onko hallituksilla tietoa avaruusolennoista, jota he salaavat? Pureudumme tunnetuimpiin salaliittoteorioihin.",
            "content": "Salaliittoteoriat hallitusten ja avaruusolentojen yhteyksistä ovat laajalle levinneitä. Kuuluisia esimerkkejä ovat Roswellin tapaus ja Area 51. Mutta onko näissä teorioissa perää, vai ovatko ne vain harhaanjohtavia kertomuksia? Tässä blogipostauksessa tutkimme salaisuuksia, joista väitetään olevan todisteita ja kysymme: mitä hallitukset todella tietävät?"
        },
        {
            "id": "post-007",
            "title": "Noituus ja Luonto: Vihreä Magia",
            "author": "Kaisa Mäkinen",
            "date": "2024-06-28",
            "summary": "Tutkimme noituuden ja luonnon välistä yhteyttä, sekä kuinka vihreä magia toimii.",
            "content": "Monet noidat tuntevat vahvaa yhteyttä luontoon ja harjoittavat niin kutsuttua vihreää magiaa. Se keskittyy kasvien, yrttejen ja luonnonvoimien hyödyntämiseen taikuudessa. Tässä artikkelissa käsittelemme, miten nykynoidat yhdistävät luonnon taikuuden ja rituaalit moderniin elämäntyyliin."
        },
        {
            "id": "post-008",
            "title": "Avaruusolentojen Teknologia: Utopia vai Uhka?",
            "author": "Jukka Rantanen",
            "date": "2024-05-12",
            "summary": "Millainen vaikutus avaruusolentojen teknologialla voisi olla ihmiskunnan tulevaisuuteen?",
            "content": "Jos avaruusolennot todella vierailevat maapallolla, millaista teknologiaa he käyttävät? Voisiko heidän teknologiansa mullistaa tieteemme, vai olisiko se mahdollinen uhka ihmiskunnalle? Tässä postauksessa pohdimme avaruusolentojen teknologian mahdollisuuksia ja sen vaikutuksia planeettamme tulevaisuuteen."
        },
        {
            "id": "post-009",
            "title": "Noituuden Historia: Keskiajan Vainot ja Myytit",
            "author": "Mari Väisänen",
            "date": "2024-04-05",
            "summary": "Katsaus noituuden historiaan ja keskiajan noitavainoihin sekä niiden vaikutuksiin.",
            "content": "Noituuden historia on täynnä mysteerejä ja vainoja. Keskiajalla tuhansia ihmisiä syytettiin noituudesta ja poltettiin roviolla. Mutta mistä tämä pelko sai alkunsa, ja mitä noidat todella edustivat? Tässä blogipostauksessa sukelletaan noitavainojen synkkään historiaan ja selvitetään, kuinka nämä tapahtumat vaikuttavat yhä kulttuuriimme."
        },
        {
            "id": "post-010",
            "title": "Avaruusolentojen Kielikoodit: Ymmärtäisimmekö Viestejä?",
            "author": "Antti Nieminen",
            "date": "2024-03-01",
            "summary": "Mitä tapahtuisi, jos avaruusolennot yrittäisivät kommunikoida kanssamme? Voisimmeko ymmärtää heidän viestinsä?",
            "content": "Jos avaruusolennot lähettäisivät viestin Maahan, olisimmeko valmiita vastaanottamaan ja ymmärtämään sen? Kielitieteilijät ja tutkijat ovat jo pitkään pohtineet, millä tavoin vieraat sivilisaatiot voisivat viestiä kanssamme. Tässä artikkelissa tarkastellaan teorioita ja teknologioita, jotka voisivat mahdollistaa viestinnän ulkoavaruuden olentojen kanssa."
        }
    ]}
  

  // In the edge runtime you can use Bindings that are available in your application
  // (for more details see:
  //    - https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/#use-bindings-in-your-nextjs-application
  //    - https://developers.cloudflare.com/pages/functions/bindings/
  // )
  //
  // KV Example:
  // const myKv = getRequestContext().env.MY_KV_NAMESPACE
  // await myKv.put('suffix', ' from a KV store!')
  // const suffix = await myKv.get('suffix')
  // responseText += suffix

  return NextResponse.json(responseJson)
}
