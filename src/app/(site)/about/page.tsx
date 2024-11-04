import Link from "next/link";
import Image from "next/image";
import Sydän from "@/../public/Sydän.png"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Info"
}

export default function About() {
  return (
    <div className="about w-full">
      <div className="mx-auto w-full justify-items-center">
        <Image
          src={Sydän}
          width={400}
          alt={"alt"}
        />
      </div>
      
      <div className="content text-lg prose text-green-600 pl-2">
        <p className="pb-2">
          <strong className="text-xl font-weight:600 italic text-green-600">Joutomaa </strong>on arvoton eli maatalouteen ja muuhun taloudelliseen
          hyötykäyttöön sopimaton maa-alue. Metsätaloudessa joutomaa
          määritellään sellaiseksi alueeksi, jossa puun kasvu on alle 0.1 m3
          hehtaaria kohti vuodessa. Käytännössä tämä tarkoittaa aavikoita,
          hietikoita ja suoalueita.{" "}
        </p>
        <p className="pb-2">
          Joutomaita syntyy myös kaupunkeihin, ja usein niitä siirtyy käyttämään
          joutoväkeä, ihmisiä, jotka ovat maatalouteen ja muuhun taloudelliseen
          hyötykäyttöön sopimattomia yksilöitä. Lihataloudessa joutoväeksi
          määritellään ihmiset, joiden pinta-ala kasvaa vuodessa alle 0.1 m3
          hehtaarilta. Tämän alustan ylläpito määrittelee joutoväeksi, jokaisen,
          jolla on luppoaikaa, joutoaikaa, vapaa-aikaa ja kirottua osaa
          riittävästi mielekkääseen, epäkaupalliseen touhotukseen. Ylläpito
          koostuu kokonaisuudessaan joutoväestä{" "}
        </p>
        <p className="pb-2">
          Tämä verkkosivu on internetin joutomaata, alue, jonka taloudellinen
          arvo on vähäinen, sisältö vaihtelevaa ja ylläpito heikkolaatuista.
          Joutomaan julkaisupolitiikka ja itsenäisyyden julistus kuuluu
          seuraavasti, jos julkaisusi on kiinnostava, lähetä se meille. Jos
          julkaisusi on tylsä ja ärsyttävä, lähetä se jollekin turvalliselle
          aikuiselle. Joutomaa julkaisee mieluusti kaikkea dokumenteista
          taideteoksiin, tekstitaiteeseen, filosofiaan, omavaraisohjeisiin,
          vaihtoehtotoimintaan ja musiikkiin.{" "}
        </p>

        <p>Arviointityökalu tuotoksesi lähettämiseen:</p>
        <ol className="pl-8">
          <li>Arvioi onko tuotoksesi muuten mielekäs</li>
          <li>
            Jos toteat sen olevan mielekäs, lähetä se osoitteeseen 
            <Link href={"mailto:joutomaa.online@protonmail.com"} className="text-blue-500 underline"> joutomaa.online@protonmail.com</Link> 
          </li>
          <li>
            Jos toteat, että sen olevan mieletön, harmittele asiaa, ja lähetä
            tuotos silti, arvioimme sen mielellämme, ja katsomme, onko se meidän
            mielestämme julkaisemisen arvoinen. Jos toteamme tuotoksesi olevan
            jännittävä (ruots. Spännande) ja päätämme julkaista sen, totea
            itsesi olevan liialliseen itsekritiikkiin taipuvainen kakkapylly ja
            paranna tapasi välittömästi.{" "}
          </li>
          <li>Katso sormeasi</li>
          <li>Laita se nenään</li>
          <li>Kaivele</li>
        </ol>
      </div>
    </div>
  );
}
