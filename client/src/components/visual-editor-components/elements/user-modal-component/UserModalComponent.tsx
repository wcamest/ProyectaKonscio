import { setSelectionRectangle } from "@/redux/features/visual-editor/visualEditorSlice";
import { RootState } from "@/redux/store/store";
import Rectangle from "@/types/Rectangle";
import PageDocument from "@/types/page-document/PageDocument";
import PageDocumentUserModalComponent from "@/types/page-document/PageDocumentUserModalComponent";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  data: PageDocumentUserModalComponent;
  document: PageDocument;
};

const UserModalComponent = (props: Props) => {
  const { data, document } = props;
  const { currentScreen, currentStyleEditNode } = useSelector(
    (state: RootState) => state.visualEditor
  );
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);

  const Functions = {
    ShowSelection() {
      if (!ref.current) return;
      if (data.id !== document.selectedNode) return;

      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      const domRect = ref.current.getBoundingClientRect();
      const rectangle: Rectangle = {
        x: domRect.x,
        y: domRect.y,
        width: domRect.width,
        height: domRect.height,
      };

      dispatch(setSelectionRectangle(rectangle));
    },
  };

  useEffect(() => {
    Functions.ShowSelection();
  }, [document.selectedNode, currentStyleEditNode, document, currentScreen]);

  return (
    <div
      ref={ref}
      className="w-full h-screen flex flex-col justify-between overflow-hidden"
    >
      <div className="p-2 bg-blue-800 text-blue-50">Ventana Flotante</div>
      <div className="w-full h-full overflow-hidden">
        <div className="w-full h-full overflow-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit soluta
          magni modi? Consequatur quia vero cumque hic! Tempora harum
          voluptatibus esse ex assumenda, amet omnis praesentium dolorum
          voluptas, cum quaerat! Sequi nam maiores aliquam aperiam illum
          explicabo, ab sit saepe non, porro ad velit voluptas nostrum tenetur
          ullam natus quam ea nesciunt? Labore alias voluptates, quae quasi quos
          rerum consequuntur. Voluptates modi quidem animi ex, natus, provident
          architecto optio eligendi, tempora voluptatum nihil neque! Illum
          consequatur quaerat, odit temporibus nesciunt excepturi dignissimos
          impedit minima soluta cupiditate cumque voluptate ducimus autem.
          Sapiente odit pariatur laudantium a libero amet facilis incidunt
          placeat at, blanditiis ipsum nihil repudiandae, illo quia. Sint,
          suscipit, obcaecati quas, incidunt temporibus necessitatibus saepe
          modi ab commodi voluptates ipsum. Est accusamus, quo nam beatae saepe
          debitis aperiam ab perferendis voluptas, dolorum tempore. Rem maiores
          at facere in, itaque ipsa eveniet suscipit obcaecati nobis provident,
          voluptate totam sed molestiae nesciunt! Temporibus ex, eligendi
          assumenda id reiciendis optio sapiente provident sed itaque! Eaque
          soluta laborum maiores perferendis voluptates animi quisquam
          blanditiis reiciendis. Aperiam accusantium ullam sint ipsa tempore ad,
          doloremque eaque! Ullam quis porro harum, maiores vero, in maxime
          veritatis laudantium nam aspernatur reprehenderit eum beatae nihil
          possimus dicta deleniti sint delectus unde fuga. Culpa eaque quaerat
          magni nam quo atque! Laudantium reprehenderit a, nemo, illo
          consectetur ipsa doloremque officia quae sit, veniam possimus hic
          maiores ducimus quod reiciendis ut. Architecto voluptates nisi
          aspernatur sint inventore accusamus molestias ratione dolores quos.
          Tempore nulla quis est pariatur et. Nostrum voluptatem error
          asperiores sequi, quo veniam labore aspernatur iste exercitationem ad
          optio dolore quam et numquam minus accusantium voluptates itaque
          possimus. Natus, corrupti. Accusamus atque ducimus fugit deleniti quia
          minus cum dolorem veritatis non consequuntur rerum suscipit illum
          repudiandae numquam aut ipsum cumque, distinctio harum, accusantium,
          voluptatibus in eius saepe hic! Necessitatibus, velit. Error
          voluptatibus eveniet animi necessitatibus, facere vitae quo tenetur
          repudiandae rerum aperiam saepe quasi maiores rem cumque nobis,
          consequuntur laboriosam nisi aliquid suscipit quibusdam sequi
          mollitia. Quisquam, facere cum. Consectetur? Ea obcaecati minus fugiat
          commodi vel soluta? Enim provident, illo minus unde cum consequatur
          incidunt fugit repellat dolorum voluptatem quas consequuntur officia,
          quisquam quis eos, consectetur repellendus quidem vero ducimus!
          Laborum, fuga rerum voluptatem quidem dolores labore ea nemo quibusdam
          nesciunt, officiis, fugit maxime? Adipisci, recusandae. Doloribus
          molestiae quos quibusdam. Placeat eaque ducimus alias nobis eveniet
          assumenda, vitae harum nostrum. Odit omnis voluptatem accusantium non
          sed provident iste quibusdam earum alias commodi, mollitia, quas neque
          officia consequatur. Laborum eligendi tenetur ipsa, ducimus repellat
          aperiam quam minima atque eos adipisci! Voluptas. Perspiciatis facilis
          quaerat sint nostrum omnis ut suscipit eaque ad hic expedita corporis,
          dolorum rem voluptatem modi non tempore praesentium explicabo saepe
          qui excepturi ea soluta quasi quo amet? Iusto? Ducimus veniam
          excepturi, voluptas consequuntur voluptatibus vero magni id doloribus
          facere qui quis fugiat accusantium hic, aut maxime asperiores sint.
          Autem minima, ad voluptas nobis nihil distinctio sequi harum
          assumenda. Ducimus quibusdam rerum, cum nisi architecto doloremque
          molestias laboriosam nesciunt similique ab consequatur, in minima
          molestiae vero harum qui tenetur sapiente fuga. Dolorem, laborum.
          Soluta facilis vero dolores esse voluptates. Labore repellat
          repellendus rerum animi obcaecati officia tempore, culpa consequuntur
          nam. Odio neque corrupti obcaecati ut vero non. Qui est exercitationem
          similique facere. Molestiae voluptas eveniet accusantium quas, nulla
          vel! Nisi sapiente necessitatibus obcaecati dignissimos. Incidunt
          voluptates odio error fuga magni veritatis reprehenderit placeat
          laboriosam, accusantium perferendis ratione, distinctio quam quia?
          Iusto sit, corrupti eveniet cupiditate eaque ratione nemo quisquam.
          Vitae fugiat ullam recusandae at omnis reprehenderit a adipisci?
          Consequuntur omnis accusantium quidem sint harum autem nulla, ducimus
          placeat, est dignissimos provident blanditiis? Doloremque veniam,
          atque cupiditate cum rerum labore. Veniam vitae veritatis facere
          architecto perspiciatis dolore ab sequi minus modi aperiam explicabo
          totam nihil cupiditate eveniet corrupti possimus omnis, laborum optio
          delectus eligendi. Similique voluptatem nobis exercitationem
          recusandae odio. Iste reiciendis repudiandae provident iure earum
          cupiditate amet, libero ducimus magni! Ipsam, quasi ad corrupti iure
          incidunt deleniti consequatur laboriosam aliquid sit, dolorum nesciunt
          maxime dolorem nulla, optio impedit consequuntur. Vel minima illo rem
          ex totam dolorum error consectetur quas, alias porro quibusdam, beatae
          blanditiis suscipit necessitatibus odit commodi assumenda incidunt
          voluptas eum vitae esse dolores. Facere perspiciatis sequi quasi.
          Perspiciatis, eligendi quae. Assumenda, dolore est? Sunt quae eligendi
          rem aspernatur nobis odio accusantium, ad vel veniam modi aliquam
          saepe, consequatur possimus, voluptates tempora harum perspiciatis
          cumque veritatis. Sit, facilis. Odio possimus voluptates
          exercitationem quo nemo pariatur. Maxime accusantium enim illo
          voluptas magni molestiae accusamus nemo alias atque, nesciunt ipsam
          repellat maiores sit aperiam modi neque ab suscipit, animi eveniet.
          Delectus perferendis ut omnis, tenetur voluptatem dolorum? Facere,
          quos omnis officia iure itaque beatae sed aliquam aliquid harum
          consectetur iste ad inventore velit, ullam ipsam voluptates labore
          suscipit. Nostrum, beatae. Libero omnis id iste, quisquam eveniet cum
          aperiam magnam ab hic debitis soluta impedit illum minus dolorum
          deleniti quasi minima explicabo optio laudantium atque nam tempora
          quod. Cumque, ab voluptatum? Magnam adipisci quasi exercitationem,
          harum quibusdam tempore maiores impedit? Consequuntur ad dolore eaque
          est explicabo. Ad possimus, nemo omnis laudantium explicabo esse animi
          earum itaque, perspiciatis aut delectus corrupti consequatur. Minus,
          perferendis adipisci! Animi omnis dolorum optio nihil maiores nemo
          molestias odit harum doloremque eum dolore voluptatum minima beatae,
          quam labore reprehenderit id repellendus cumque ullam perspiciatis
          odio cum mollitia. Fugiat adipisci, incidunt voluptatibus similique
          hic assumenda ipsa illum nostrum molestias vel porro necessitatibus
          magni quidem quaerat laudantium cum quibusdam labore ratione? Iste
          magni cupiditate minima fugiat, harum quis sint? Amet perspiciatis
          animi mollitia illo sunt aperiam dolorem omnis reprehenderit repellat
          ipsam sequi possimus assumenda saepe, eveniet eos eaque maiores
          numquam? Voluptatum assumenda iusto eius perspiciatis reiciendis quam
          inventore laudantium? Eum maiores enim magni sit et ullam perspiciatis
          aperiam fugit quae eaque, quos labore obcaecati! Nemo vero provident
          officia nobis deleniti facere odio delectus beatae nam libero,
          nesciunt voluptatum pariatur. Eius porro consequuntur repellendus odit
          debitis cupiditate doloribus! Aliquid illo quos, laborum temporibus ab
          ullam dolore! Praesentium magni consequatur quasi similique
          repudiandae ad iure, ipsa libero quae odit mollitia impedit! Ipsa
          impedit molestias quo sit tempora. Blanditiis porro, earum laborum
          tempora in debitis distinctio velit culpa, doloremque ad id eum. A
          eaque dolorum in enim incidunt odit eius ut neque! Voluptate expedita
          rerum numquam reiciendis nesciunt explicabo aliquid qui eaque aperiam.
          Reiciendis quisquam, voluptas repellat quos eius quidem? Odit commodi
          ullam inventore? Obcaecati quas sapiente amet, laudantium repudiandae
          voluptate omnis? Laudantium unde, quo sunt quasi dolore porro
          mollitia. Dolores nostrum neque alias hic fuga corrupti accusantium
          voluptatibus modi minus fugiat, tempore iste odit, repudiandae
          assumenda! Perferendis ullam perspiciatis eius ut! Iusto libero,
          incidunt officiis error voluptatem delectus ab voluptas ratione iure
          sunt eius asperiores consectetur laboriosam quod quasi illum commodi
          dignissimos tenetur et nesciunt! Illo odio recusandae quos veritatis
          doloribus. Quibusdam iste nemo rem tempora laborum voluptates
          doloribus? Itaque, placeat magni? Corrupti nihil sint quis nostrum
          autem rerum impedit accusantium, nam quod provident unde similique
          esse omnis totam suscipit? Vitae. Distinctio suscipit, molestias
          incidunt nemo modi amet minima? Fugiat nesciunt qui eligendi
          voluptates asperiores similique consequatur commodi accusamus. Maiores
          soluta repudiandae sapiente, fugit quas odio quia laborum tempore sed
          quidem! Laboriosam earum repudiandae ullam distinctio laborum
          blanditiis architecto placeat cupiditate consequatur, cum quos sint
          culpa dolore iusto fuga aut, quia et rem excepturi commodi cumque
          temporibus suscipit? Quasi, asperiores accusantium. Officiis velit
          dignissimos impedit! Fuga reiciendis temporibus commodi possimus amet!
          Ipsa ut repudiandae dolore nam maxime id, saepe, quae corrupti ad
          maiores esse odit molestias labore quasi velit fugit earum. Odio
          explicabo beatae ipsam aspernatur expedita quia harum nihil et, natus
          eius amet debitis similique repellat consequuntur ut dolorum dolore.
          Possimus, voluptatum nam culpa rerum ab aliquid quia deleniti dolores.
          Culpa saepe a repudiandae rerum ratione in sunt corporis consectetur
          commodi tempore id, vel sint esse. Laudantium aliquam corrupti fuga
          quaerat maiores tempore, saepe cumque deleniti dignissimos, nihil
          voluptatibus beatae. Corrupti ab labore maiores placeat officiis
          voluptates iure aut nemo, ullam, vel impedit fugiat exercitationem
          dolores illo. Iure fugit velit voluptatem, molestias, porro officiis
          adipisci consequatur, nobis magni fuga enim. Laudantium, temporibus
          explicabo aliquam hic doloribus quaerat itaque? Quia eaque assumenda
          autem, veritatis similique qui sit, eum quasi accusantium cumque eius
          ut fugit reiciendis alias sed nobis ullam magnam aliquam. Quis
          possimus atque eius perferendis dolore sint magnam. Repellat ratione
          nisi aliquam saepe voluptate id, labore maiores quo ipsam qui
          laudantium consequatur recusandae magni dolores delectus dignissimos
          corporis numquam et. Ex suscipit a dicta exercitationem aut vel quis
          maiores architecto consequatur optio accusantium voluptatum,
          perspiciatis explicabo laudantium. Repudiandae deleniti dolore, eius
          consequuntur placeat possimus fugit cum ea similique nostrum officiis.
          Necessitatibus dolore sed debitis quis at harum provident ex! Dolores,
          praesentium aut rem quas consectetur accusantium, perspiciatis
          provident earum nostrum impedit veritatis ipsa ea eos odio hic alias
          est et. Modi necessitatibus laudantium quibusdam asperiores reiciendis
          soluta iusto repellendus debitis amet quo nostrum a, quasi impedit
          accusantium. Perferendis odit eveniet numquam quo! Ipsum molestias
          aspernatur fuga magnam dignissimos, deleniti debitis? Esse quam earum
          velit accusantium magnam doloribus iste, id excepturi temporibus nobis
          facere culpa molestiae voluptatum natus voluptate. Ullam voluptatem,
          quod quaerat modi doloremque ut quo aliquam dicta sunt quos. Quidem
          delectus libero cupiditate doloremque dolore, numquam quia magnam
          dolorem facere tempore facilis autem officia necessitatibus hic
          eligendi eius eum minima voluptas veritatis. Vero neque eos commodi
          atque tempore expedita? Minima commodi impedit similique voluptatum
          voluptas est iure debitis saepe doloremque id, odio facilis rerum
          exercitationem reprehenderit dolores suscipit maiores error
          praesentium temporibus ut. Vero, nesciunt? Obcaecati iste praesentium
          excepturi. Id molestias sit accusantium excepturi quae vero optio
          minus officiis libero hic, sed perspiciatis quo veniam ea sapiente cum
          beatae harum praesentium quibusdam ut atque odio! Assumenda nemo dolor
          commodi. Rerum labore quaerat dolorum aliquid exercitationem officia
          dolorem repellendus aliquam iure! Magni, ab? Dolore dolores inventore
          enim doloribus. Quaerat ut quisquam nihil eveniet inventore!
          Voluptatem numquam consectetur aut reiciendis est? Cupiditate
          voluptatibus repellendus accusantium, quo nihil consectetur
          reprehenderit distinctio et, suscipit asperiores atque debitis
          excepturi voluptate totam, numquam ducimus quia eius? At sequi eveniet
          sunt provident assumenda atque eligendi architecto. Tempora quasi
          exercitationem suscipit omnis cupiditate quibusdam unde enim commodi a
          odio vitae inventore, aut, eaque sapiente deserunt nemo earum quaerat
          dolor, maiores cum neque atque? Natus nostrum amet odio! Placeat
          nesciunt facilis odit, accusamus adipisci nulla. Nulla aperiam
          similique in officia dolorem aliquid pariatur fugit, suscipit
          accusamus veniam a dolor porro quas labore. Sit cupiditate aperiam
          officiis eveniet? Magni. Amet ullam mollitia officiis quo eveniet.
          Minus nisi itaque doloremque facere, enim deleniti earum quam
          voluptatem dicta ullam neque ad nobis placeat corporis voluptatum
          delectus est aperiam minima, inventore maxime! Et maiores quas aliquid
          alias expedita libero, saepe quae quis soluta asperiores vitae
          obcaecati nostrum quo! Excepturi nesciunt odit quisquam quasi tempore
          explicabo aliquam in mollitia, deleniti consectetur error nobis.
          Commodi quibusdam perspiciatis quis, rem officia fugit earum assumenda
          rerum quam quasi optio quae corrupti unde molestias voluptates
          consectetur. Impedit quidem nulla sequi velit dolore minus veniam
          voluptas laudantium recusandae. Minima maxime iure impedit quae,
          aliquam natus illum tempore officia velit nesciunt veritatis quia
          autem laudantium error repellendus alias facere laboriosam! Ratione
          odit ea dignissimos iste? Sint ad sunt recusandae. Voluptatum odio
          adipisci velit nesciunt? Non dignissimos possimus alias obcaecati,
          eius hic labore id debitis ratione tempora, nisi ex rerum explicabo
          dolor quaerat similique. Possimus quod alias nesciunt laudantium
          veniam? Provident, eligendi id? In porro error velit facilis, unde
          expedita ratione! Totam doloremque aliquid architecto ab sed quis
          facere temporibus. Voluptatibus, laboriosam consequatur unde obcaecati
          exercitationem porro molestias totam quos. Ullam ducimus laboriosam
          cum dicta placeat obcaecati vel, incidunt ea adipisci. Enim, ea autem
          ipsum, quidem amet tempore qui optio neque, dignissimos sit eos modi.
          Aliquam dolorem soluta atque nam? Culpa eligendi rem minus sequi quod!
          Nobis cupiditate delectus cumque est illo blanditiis voluptate hic,
          voluptatibus vel quidem, architecto commodi aliquam velit ullam fuga.
          Labore voluptatem adipisci sit ut sed. Suscipit quos eligendi autem
          eos enim animi facere iusto nam perspiciatis. Similique expedita quod
          laborum veritatis, adipisci delectus, earum a aut sunt, natus nostrum
          cum sit? Molestias porro rerum corrupti. Iusto quaerat itaque impedit
          voluptatum deserunt harum repellat id delectus soluta iste distinctio
          nemo, minima nesciunt repellendus beatae. Quaerat sapiente ea minima
          vitae dolores quidem distinctio quam ipsum veritatis earum?
          Voluptatibus repellendus velit pariatur non est ut odio officia nam
          consequuntur dolore sint delectus, id placeat temporibus fuga sapiente
          soluta nesciunt dolorum qui sit enim! Nam asperiores optio delectus
          cum. Ea itaque, atque perferendis totam minus aperiam. Architecto
          cumque, itaque aliquam alias assumenda officia perspiciatis unde
          doloribus enim similique officiis vel nostrum repellendus distinctio!
          Ducimus id blanditiis deserunt! Accusantium, illo. Modi tenetur
          impedit neque commodi fugiat expedita. Voluptates nemo ab id. Eaque
          quis aliquid, deleniti quam, quos totam numquam accusamus omnis ullam
          quod error corrupti distinctio et ad delectus ratione. Labore magnam
          itaque nobis blanditiis beatae perferendis, laboriosam laborum officia
          culpa saepe similique provident dignissimos omnis, quisquam rerum
          voluptatibus veniam. Doloremque officia quis, ducimus modi velit
          suscipit architecto fugit placeat? Laboriosam quisquam ut obcaecati.
          Eum neque fugit, perferendis, corporis nemo dolore vel magni quod
          ratione, beatae excepturi quis. Esse mollitia temporibus dolorum illo
          quo obcaecati porro odit ullam, veniam delectus! Quibusdam ullam minus
          sed at unde autem cupiditate. Ut beatae tenetur aliquid, facere,
          doloribus ad delectus nemo aspernatur ex praesentium iure. Impedit,
          repellat. Ea hic consequatur error molestias tempora rem. Nobis
          ratione alias, possimus, reiciendis culpa eaque, quidem praesentium
          repellat debitis tenetur quaerat asperiores vel architecto?
          Dignissimos quasi iste nisi natus tenetur deleniti, quae accusamus
          animi non incidunt consequatur pariatur. Cumque perspiciatis molestiae
          tenetur voluptate culpa assumenda, rem debitis. Quod amet cupiditate
          fugiat sit. Voluptate quis rerum minus alias voluptates sed nemo est
          rem assumenda ratione dignissimos, vero, numquam nam. Earum voluptas
          saepe corporis! Reiciendis, quos. Odit repellat nulla quis quod
          voluptate saepe pariatur commodi mollitia, unde eligendi nemo iste
          autem placeat corporis at. Eius accusamus quaerat temporibus numquam
          ex. In qui voluptatem, dolorum at maxime, ipsam temporibus architecto
          porro ullam mollitia quasi doloremque libero aspernatur eum
          accusantium id. Quisquam magnam magni doloremque illo, corrupti
          pariatur aut nesciunt nemo praesentium? Iusto vel aliquam deleniti,
          illo quae corrupti dicta tempora suscipit dolor accusamus non delectus
          consectetur sit maiores enim est obcaecati sapiente nesciunt ullam
          voluptatibus sed excepturi! Quas blanditiis mollitia similique! Dicta
          nobis itaque obcaecati explicabo consectetur officia vero architecto
          voluptate illum, eaque soluta officiis rem at, distinctio veritatis
          consequuntur expedita eos provident incidunt cum nam? Aperiam,
          adipisci. Facilis, totam nesciunt? Odio, iste eum possimus commodi
          dolore consequuntur voluptates sed obcaecati ipsam id dignissimos! Sit
          nemo eos vitae sed nulla repellat, inventore ratione odit, consequatur
          facere vel dolores molestiae enim sunt! Eos rerum optio delectus
          explicabo numquam totam reprehenderit. Aliquam quas eos odit modi
          dolorum quia temporibus ducimus cum nihil! Deleniti officiis quidem
          sequi expedita quasi ut nobis ab in atque. Totam odio odit,
          exercitationem, cumque nobis earum excepturi corrupti ut quas iusto
          quos perspiciatis facere temporibus veniam, voluptas voluptates minima
          hic ab quibusdam placeat molestias maxime dolorum ea doloribus?
          Molestias? Enim repellendus eos magnam aspernatur deleniti, cumque eum
          provident tempore minus id, adipisci aliquid ullam dolore possimus
          explicabo, porro harum libero! Excepturi hic iusto tenetur quia magnam
          quaerat culpa quos? Fuga ab velit asperiores voluptate consequatur
          veritatis, mollitia neque labore provident. Exercitationem provident
          sed iusto modi quaerat quidem inventore velit sint repudiandae illum
          doloribus est, id officia veniam amet nisi! Consequatur assumenda
          quibusdam deleniti sequi molestias nihil corrupti nam libero quasi!
          Quasi rerum odio eaque repellendus aliquam est. Velit exercitationem
          explicabo dolores reiciendis hic! Earum qui molestias nesciunt
          excepturi quas. Sequi aperiam sit ipsam incidunt fugiat omnis
          consequatur dicta dolores earum eligendi eius iure odit ipsa esse
          nihil dolore quia at culpa nam, cumque rem dolor inventore?
          Reiciendis, rem saepe. Debitis sit unde assumenda quas recusandae
          dolore delectus mollitia omnis? Inventore ipsum laborum error,
          temporibus sint voluptatibus ut laboriosam quo provident suscipit illo
          quos expedita assumenda asperiores modi at eum. Totam dolorem minima
          vitae aperiam et expedita dolorum voluptas, reiciendis explicabo quae
          veritatis nemo inventore, iure placeat quod necessitatibus hic
          voluptates delectus harum accusamus aspernatur? Nesciunt totam
          voluptates debitis ad? Dolorum eveniet harum vitae nulla doloribus
          exercitationem tempore. Incidunt, alias provident, aliquam corrupti
          tenetur esse maxime eum minima explicabo dolorem vitae? Corrupti enim
          nihil exercitationem cupiditate, qui illo iusto explicabo? Voluptates
          fugiat iure nemo corporis perspiciatis nisi reiciendis veniam eveniet!
          Consectetur eligendi magnam, doloribus eveniet laboriosam voluptate
          expedita mollitia? Rerum voluptates laboriosam quisquam, numquam
          temporibus eligendi obcaecati rem molestiae tempore? Velit, nisi nemo
          dignissimos eveniet voluptatem sapiente unde rerum architecto possimus
          sunt perspiciatis a sint dolore obcaecati. Error eveniet amet, veniam
          perspiciatis ab suscipit, mollitia rerum, ratione expedita deleniti
          architecto. Totam culpa hic aliquid ex fugit facilis assumenda, vel
          sed quibusdam sit, cumque quae. Repudiandae eum ipsum recusandae ab!
          Minima accusamus porro mollitia delectus recusandae nulla saepe
          numquam! Tempora, pariatur. Quae deleniti praesentium quo ea ab
          aspernatur! Earum repudiandae cum eaque vitae vero asperiores maiores
          voluptates dolor quo labore nulla sapiente nam sed iste alias, ut
          nobis corrupti? Dicta, rem. Dolorum, totam expedita sed nihil dolore
          sint similique. Unde, voluptatem, eaque rem dolor nemo dolore minima
          dolores consectetur, ratione aspernatur dicta modi assumenda
          laboriosam esse similique? Asperiores alias ipsa debitis. Ratione illo
          hic minima delectus in, facilis sed. Rem, alias vel. Commodi ipsam,
          quae recusandae nihil voluptatem cupiditate. Nesciunt provident libero
          enim in dignissimos asperiores tenetur deserunt fugiat magni quam.
          Veritatis numquam ab commodi voluptatem error corporis quasi eaque
          amet nesciunt praesentium, cum ex laborum tempora recusandae deleniti
          cumque, dolores vero iusto saepe, repudiandae delectus ad. Expedita
          facere ex quis. In quos veritatis veniam necessitatibus nemo,
          perferendis commodi expedita ea qui quibusdam recusandae eos, officia
          earum assumenda? Dignissimos, mollitia, omnis accusamus dolorem in
          inventore fugiat, aut doloremque enim accusantium dolor! Doloribus
          explicabo, aperiam fuga omnis veritatis maiores, modi molestias
          obcaecati ducimus vitae minima. Porro explicabo illo ducimus eligendi
          maxime culpa, quibusdam omnis, dignissimos esse error adipisci, nisi
          minima temporibus nesciunt. Eum iure id, suscipit aperiam veniam
          voluptates quos! Maxime ipsum consequuntur, inventore ipsa deserunt
          eveniet neque itaque perspiciatis explicabo delectus et quod odit
          pariatur repudiandae non cupiditate dignissimos officiis accusamus!
          Id, perspiciatis consectetur? Maiores necessitatibus quae autem?
          Doloribus sit et maxime, hic, accusamus perspiciatis consectetur
          asperiores a ducimus modi quia, dolore provident suscipit! Excepturi
          voluptate alias quos? Ut, voluptate distinctio.
        </div>
      </div>
      <div className="p-2 flex justify-end">Botones</div>
    </div>
  );
};

export default UserModalComponent;
