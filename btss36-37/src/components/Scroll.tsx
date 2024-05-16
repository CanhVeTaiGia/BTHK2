import { ReactEventHandler, useEffect, useState } from "react";

export default function Scroll() {
  const [scroll, setScroll] = useState<number>(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScroll(scrollPosition);
      document.title = `Vị trí thứ: ${Math.ceil(scrollPosition)}`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
        distinctio. Vel, debitis! Minima fugiat, omnis quam ratione quo totam
        eveniet harum beatae asperiores nisi quis similique aperiam sequi
        ducimus aspernatur? Cupiditate amet ducimus qui quaerat praesentium
        aperiam totam? Eum reprehenderit debitis culpa esse totam nihil ratione
        voluptas hic, voluptatum voluptatem ipsa blanditiis eos vel natus ex
        illo, iste dignissimos alias. Odio debitis et numquam. Officiis soluta
        velit eaque dolorum ea doloremque, nesciunt quae magnam fugit rerum hic
        nostrum earum, sit veritatis, quo similique beatae vel placeat assumenda
        est impedit! Repellat. Minima fuga, veniam aliquid perspiciatis
        distinctio culpa quidem eligendi ratione praesentium consequatur nobis
        explicabo ducimus id beatae fugiat dicta eaque doloremque, aperiam quis
        reiciendis. Eligendi libero ab deleniti excepturi repudiandae? Mollitia,
        ullam ab porro ut nisi ipsam voluptatem itaque qui et odio incidunt esse
        magni hic possimus! Distinctio quod dolore tenetur, corporis adipisci
        quaerat nobis non earum illo cum explicabo. Iusto fugit aspernatur
        deserunt cum! Illo ipsa illum molestias voluptatum est dolorum? Eius
        architecto molestias harum iusto fuga quas, rerum numquam soluta non
        voluptatum eveniet, distinctio aspernatur doloribus quisquam inventore!
        Iure asperiores ullam ut laudantium aut iusto odio repudiandae corrupti
        excepturi voluptate obcaecati ab, sapiente reprehenderit exercitationem?
        Consectetur, illum! Molestias, quasi perspiciatis. Aspernatur sequi ipsa
        autem blanditiis, reprehenderit minima fuga. Reiciendis dolores tempora
        ullam cumque fuga atque harum ipsum officia voluptates rerum
        necessitatibus, nobis, quidem error exercitationem voluptatem amet!
        Sint, molestiae soluta. Repellat accusamus iusto sint eius ullam,
        tempora reprehenderit! Corporis porro nihil eveniet sed officiis totam
        magni assumenda fugiat unde, laborum non veniam deserunt sunt voluptas
        sequi quod commodi dicta voluptates quas tempora vitae error. Magnam
        sint repudiandae atque? Obcaecati dolore quam totam, architecto iusto
        aperiam, ratione deleniti earum facilis explicabo amet cumque quibusdam
        eligendi officiis beatae excepturi dignissimos ullam et atque.
        Temporibus sint sunt quaerat animi ullam deserunt? Libero, quis
        temporibus similique dolores optio dolorum ipsa iusto, veniam facere qui
        nulla odit, debitis natus facilis eius. Cupiditate soluta laborum cumque
        reprehenderit voluptatem nobis tenetur officiis voluptates nulla
        dolorum! Vitae magni in maxime cumque molestiae? Exercitationem
        blanditiis molestiae repellat magnam fugit at, voluptatem, modi quo,
        maiores quisquam ipsum nisi voluptatum quasi aspernatur veniam
        doloremque nobis amet vitae a sunt. Omnis incidunt consequuntur dolorum.
        Officiis nostrum suscipit eius sint quidem laudantium blanditiis quae
        veniam neque provident corporis aspernatur, voluptatum modi rem
        praesentium iste? Doloremque ullam nostrum vel ad at similique! Sunt
        fugiat ipsum, optio quasi nobis possimus dolor obcaecati voluptatem
        expedita assumenda rem quia commodi! Repellendus, enim dolor, placeat
        tempore ad minima laboriosam accusantium quaerat blanditiis adipisci
        corporis, consequatur ipsa. Voluptas at qui aperiam a non! Error
        repudiandae eligendi ad dicta est nam debitis aperiam tempora omnis,
        dolorum sit eaque voluptatem! Recusandae, doloremque? Nostrum dolorum,
        nisi repudiandae non corporis minima. Ea, vero! Id, maxime. Vero fugit
        vitae, praesentium, accusamus quo a esse maxime nesciunt enim sed neque!
        Quos dolore natus repellat veritatis, nihil facilis odit animi est, quo
        dolores minus. Nam esse, nisi vitae necessitatibus ex a, impedit eveniet
        totam perferendis consequatur voluptate exercitationem alias laborum
        natus dolore temporibus voluptates pariatur aut laboriosam ipsam
        architecto saepe doloremque? Adipisci, dignissimos rerum! Ipsam,
        deleniti? Nemo libero commodi ipsa quis accusamus. Voluptates dolorem
        neque nam quae expedita, inventore repellendus voluptatum et quisquam ut
        numquam quas aliquam, quis, repudiandae quia recusandae corrupti.
        Excepturi, voluptas? Dolor sunt earum assumenda, dignissimos unde modi
        vel tenetur ea aliquam, amet accusantium fugiat eos ut? Blanditiis
        facere accusamus modi commodi deserunt, aliquam reiciendis id minus
        voluptate provident doloremque esse. Qui, aliquid illo? A repudiandae
        voluptas consequuntur est dolores, inventore at et! Minus consectetur
        dolore atque non aperiam tenetur similique accusantium repellendus, illo
        rem odio sequi fuga consequatur libero impedit! Asperiores ea vel soluta
        libero molestiae harum corporis debitis ratione ducimus ipsam eius
        aliquam enim minus possimus ipsum, placeat perspiciatis odio doloribus
        aliquid tempora minima unde, labore voluptatem? Eos, odit! Laboriosam,
        deleniti nisi, quibusdam iusto mollitia beatae amet in tempore
        temporibus fugiat reiciendis sed nemo, harum eligendi quo? Blanditiis
        voluptas temporibus quia sequi eveniet asperiores officiis ut libero
        consequatur minus? Corporis aperiam maiores omnis provident maxime
        molestiae incidunt accusamus enim. Aspernatur architecto, sequi eaque
        quidem dolore ratione vitae laudantium perferendis, ipsum voluptatem
        reiciendis, culpa rerum nesciunt tempore tenetur provident hic.
        Molestias modi ad incidunt et sunt beatae iste itaque, laudantium
        ducimus labore rem. Illo excepturi qui molestias corrupti autem sit
        assumenda, ipsum aspernatur aliquam, ad fugiat laudantium itaque in
        accusantium. Porro perspiciatis quia explicabo vitae adipisci
        consequuntur at commodi omnis ducimus quisquam quis odit, incidunt quasi
        numquam suscipit saepe necessitatibus! Aspernatur nesciunt placeat
        reprehenderit nulla rem commodi eaque non quod! Accusantium velit totam,
        deserunt exercitationem doloribus iste suscipit tenetur voluptatum ipsa
        quo blanditiis laudantium quam dicta, ea enim iusto voluptates unde,
        magni tempora dolore aspernatur? Delectus recusandae explicabo
        temporibus officia? Harum, illum ratione aut eum, aperiam dolorem,
        aliquid maiores error architecto odio adipisci vero fugiat eligendi? Quo
        ad, ullam id magnam voluptatum earum alias harum illo vero similique?
        Inventore, corporis. Iure eligendi nulla odit quo accusantium adipisci
        veritatis accusamus nesciunt iste rerum consequuntur blanditiis magnam,
        perferendis ex. Impedit, voluptate, deleniti similique dolore sit,
        adipisci repellat odit ipsam incidunt quasi expedita! Libero quo eum
        porro placeat voluptatem debitis aspernatur ea ad dolores tenetur
        possimus provident saepe quam quidem, amet sed fugiat eos impedit
        voluptas ratione at error! Unde voluptatum vero praesentium. Obcaecati
        doloremque recusandae veniam fugiat aliquam, corporis dolores odio
        excepturi atque repudiandae adipisci dignissimos cupiditate laboriosam
        error ipsum quae iure rerum dolorem blanditiis quasi autem neque
        officiis explicabo beatae. Deleniti. Suscipit esse consequuntur
        necessitatibus facere veritatis vel, magnam omnis, in eligendi nulla
        nemo aut dicta quos, voluptates assumenda modi. Facere autem et incidunt
        sapiente necessitatibus aut cum voluptatibus sequi maxime! Harum aliquid
        velit ex voluptates? Hic facilis consectetur cum ratione aliquid minima
        explicabo voluptatibus, obcaecati eos corrupti doloremque possimus iusto
        ea culpa doloribus, officiis molestias velit distinctio pariatur
        laboriosam nihil! Cumque eveniet modi quo vitae itaque sit repellendus
        autem reprehenderit ut facilis facere porro, veritatis aut dignissimos
        impedit doloremque, architecto adipisci neque laboriosam recusandae
        accusamus nemo quod exercitationem sequi? Ducimus. Tempore quidem
        praesentium voluptatem tempora expedita blanditiis velit magni eum
        libero in, suscipit culpa sit. Eum facere perferendis debitis,
        exercitationem quaerat nostrum eos nisi, provident ut, molestias omnis
        magni saepe! Nam similique hic fugiat labore atque pariatur, nemo
        nostrum, ipsa numquam in culpa quae deleniti ex eligendi eius
        consequuntur laborum laudantium totam voluptate soluta illo voluptatem
        quos? Incidunt, possimus laborum! Consectetur aliquid, esse libero nihil
        delectus porro recusandae nulla voluptatibus omnis laboriosam labore
        odio vitae itaque! Rerum aspernatur recusandae, inventore fugiat saepe
        vel at quod et enim repudiandae quaerat iure. Magni perferendis
        perspiciatis, illum eius nemo eligendi dolore cum ut tempore voluptate
        numquam sed unde in mollitia quas doloribus iste aperiam sit doloremque!
        Veritatis suscipit ducimus eum? Delectus, laudantium adipisci! Voluptate
        voluptatem dicta sed? Quos recusandae consectetur vel odit doloremque
        debitis. Tempora qui magnam expedita modi incidunt, nisi quod obcaecati
        placeat, eaque laboriosam amet. Maiores officia dolorem quibusdam vitae
        optio? Voluptatibus quis reprehenderit, saepe dolorum itaque aperiam ab
        quo eum rem similique corrupti omnis officia animi labore sapiente
        facere vel excepturi rerum! Blanditiis, inventore corporis atque iste
        aliquid magnam tempore. Dolorum ad, voluptatibus autem vitae fugit
        impedit asperiores non facere quasi quod quo ratione expedita, iste,
        rerum saepe ipsum doloribus. Voluptas odio, quasi iste a magni modi
        maiores voluptates suscipit. Vitae repudiandae aperiam nobis ea, error
        rerum reiciendis consequatur, distinctio, suscipit ipsa officia aliquam
        dolorum necessitatibus molestias eligendi quisquam eum. Enim aliquam
        soluta ex porro veniam. Reprehenderit sunt dolor suscipit. Laboriosam
        atque inventore nihil animi id repellendus enim sint, eveniet aliquid
        dolor! Eligendi cum nobis provident possimus perferendis fugit
        perspiciatis sequi hic doloremque velit asperiores ratione commodi
        porro, nisi consectetur. Delectus ducimus ab at, eius recusandae vel
        praesentium inventore sequi porro atque id pariatur deserunt nisi
        nesciunt libero. Illum, doloremque dolores possimus enim quo ratione
        voluptatem officiis repellendus adipisci saepe! Magnam delectus ut
        exercitationem? Magnam tempora consectetur non, aut perferendis
        blanditiis voluptatum, voluptas fugiat voluptate temporibus adipisci
        possimus. Cum, quibusdam doloribus ipsa laudantium fuga debitis impedit
        autem tempore expedita officia! A harum at dolor quaerat in dolorem unde
        laudantium. Non officiis vitae aspernatur architecto esse pariatur
        accusantium adipisci omnis sapiente corrupti, possimus explicabo dolore
        iste obcaecati vero? Error, quos. Ducimus. Rem voluptatum eum et, ipsam
        dolore earum temporibus? Rerum sequi ad laborum vero iusto distinctio
        qui, repellendus corporis possimus nobis perspiciatis aliquid ullam amet
        officia quas reprehenderit consectetur. Debitis, repellat. Ducimus,
        ullam nam. Eius illo aspernatur, sapiente facilis atque, voluptatibus
        dignissimos, dicta sunt quaerat aliquid minus perspiciatis ipsam labore
        illum cum molestiae fugit! Tempora atque repellat esse consequatur
        laboriosam mollitia. Nesciunt magnam molestiae voluptas, recusandae sunt
        totam similique obcaecati quo. Quibusdam consequuntur ea necessitatibus
        minima doloremque sapiente debitis dolor rerum laudantium, eum maxime
        consequatur ad suscipit, commodi, beatae iure? Cum? Quisquam, ea
        aperiam. Consequatur fugiat, eius, enim quasi nulla a suscipit provident
        accusantium quibusdam cum vitae, similique iure? Nisi cum totam odio est
        ducimus corporis quidem necessitatibus quas minus quia. Fugiat natus eos
        quos earum exercitationem. Magni omnis delectus facere animi eos,
        distinctio minus neque inventore eaque autem, maxime asperiores
        blanditiis porro ratione, optio saepe perspiciatis quaerat tempora dicta
        illum?
      </p>
    </>
  );
}
