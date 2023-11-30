import PageDocument from "@/types/page-document/PageDocument";
import PageDocumentRow from "@/types/page-document/PageDocumentRow";
import React from "react";
import VisualEditorPageDocumentRowComponent from "../visual-editor-page-document-row/VisualEditorPageDocumentRowComponent";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import ModalComponent from "@/components/Modal/ModalComponent";

type Props = {
  data: PageDocument;
};

const VisualEditorPageDocumentComponent = (props: Props) => {
  const { data } = props;

  const Renderer = {
    Rows() {
      const rows = data.nodes.filter((node: PageDocumentNode) => {
        return node.type === "PageDocumentRow";
      });

      return rows.map((Row: PageDocumentRow, key: number) => {
        return (
          <VisualEditorPageDocumentRowComponent
            key={key}
            data={Row}
            document={data}
          />
        );
      });
    },
  };

  return (
    <div className="relative w-full h-fit p-10">
      <div className="border border-dashed border-blue-200 flex flex-col">
        {Renderer.Rows()}
      </div>
      <ModalComponent id="add-element-modal" buttons={[
        <button>Hola</button>
      ]} title="Añadir Elemento">
        <div className="p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam expedita eius nostrum, consectetur nulla cumque quidem provident enim nemo nihil minima consequatur molestiae est tenetur consequuntur tempore ad eaque laboriosam?
          Nemo quas aspernatur ab optio. Perspiciatis, fugiat in eius enim tempora, illum similique quasi iste quod a eaque aspernatur possimus suscipit nihil consectetur sequi! Minus sequi vel numquam necessitatibus adipisci!
          Soluta tempore laboriosam ratione rerum aliquam, obcaecati dignissimos minima, blanditiis explicabo magni cum fugit quasi doloremque assumenda beatae. Cupiditate, distinctio magni esse nulla fuga deserunt ullam et fugit alias impedit.
          Beatae ex ducimus necessitatibus, exercitationem mollitia architecto facilis vel unde possimus cumque nesciunt molestias nam ratione saepe odio adipisci id. Ut ipsum, quas asperiores magnam soluta ducimus accusamus pariatur vitae!
          Repellat cupiditate, deleniti sequi fugit dignissimos fuga mollitia maxime perferendis. Architecto incidunt accusantium deleniti similique tempora. Vero voluptatem delectus aut dolores pariatur aliquam, inventore corporis cumque quibusdam nostrum eum fuga?
          Cumque commodi dignissimos velit alias quia quasi error, tempore ea obcaecati! Fugiat natus facilis laboriosam atque accusamus sed, necessitatibus hic odio exercitationem sit architecto pariatur consequuntur voluptatem tempore similique iste.
          Quas perspiciatis nostrum atque commodi vitae fugiat accusamus! Ullam quas temporibus corporis. Distinctio fuga sint recusandae, vel voluptate error voluptatibus. Magni provident consectetur omnis maiores atque veniam cum fugiat distinctio?
          Asperiores saepe suscipit rerum a eaque? Cumque eveniet facilis impedit explicabo voluptatum! Quo, reprehenderit! Corporis vel est autem rem dolorem incidunt, nesciunt soluta, nihil quibusdam molestiae tempore ratione laudantium eligendi.
          Explicabo molestias qui a perferendis, quae exercitationem vel excepturi ratione quis soluta ad ea recusandae, vero quod. Libero numquam sapiente recusandae nobis sed vitae doloremque, dicta repellat itaque in harum.
          Debitis placeat voluptatibus voluptate corporis? Repellendus recusandae dolores repellat expedita, cumque blanditiis iure dolorem dicta quo aliquam nobis ullam, unde nostrum vitae qui. Tempora, sapiente! Nihil ad quibusdam maxime. Quasi.
          Laboriosam adipisci error magnam, aperiam incidunt quas tempore ullam suscipit, quidem sequi rerum? Temporibus debitis commodi quaerat fugit! Praesentium eum ad voluptatibus quam corporis distinctio inventore ea dolores quasi rerum.
          Quo minus excepturi deleniti, hic itaque veritatis soluta ipsum culpa reprehenderit illo, ipsam optio architecto saepe voluptatum tempora non totam facere dolores voluptate, corrupti explicabo quam quia porro quidem? Consequatur!
          Eos iusto, at voluptatum harum, distinctio expedita error id voluptas voluptates ab enim itaque? Mollitia ab cum, voluptas assumenda itaque illum saepe, commodi quibusdam qui voluptate ducimus et quaerat amet.
          Facere totam minus, repellat ratione qui commodi porro accusamus iste corrupti, unde odit hic dicta quod ea delectus fugiat est voluptate amet nemo obcaecati ipsa cumque dolore! Voluptate, animi aspernatur.
          Non praesentium eum veritatis, esse porro provident ipsam cupiditate voluptate. Rerum error at sit soluta fugiat vitae voluptatum incidunt consequatur reprehenderit non iure doloremque iusto sapiente, laboriosam ipsum accusamus repellendus?
          Culpa dolore perferendis nemo vitae veniam voluptatibus, neque repellendus ipsa magnam officia iste id earum, sint aperiam quas sapiente. Debitis culpa nulla aperiam minima veritatis itaque voluptatum officia laudantium soluta!
          Aut explicabo architecto dolorum corporis temporibus libero expedita labore incidunt et tempora repellendus accusantium debitis inventore aliquid, modi tempore illum vero ipsa dolorem ut iusto consequuntur omnis distinctio! Aut, quo?
          Quibusdam eius, quaerat incidunt optio molestias, expedita quia fugiat dolore reiciendis consectetur dolorum adipisci rerum! Ut, iste, deleniti repellat consequuntur eum veniam minus dolores deserunt necessitatibus quam suscipit autem amet!
          Quis vitae harum ad consequuntur sapiente sit fugit exercitationem ut et aspernatur, ducimus mollitia nihil incidunt nam officia tempore? Explicabo eos ut iure id, minima perferendis sequi veniam sapiente repellat?
          Quis sunt ipsum doloremque, beatae quod adipisci sequi magni eligendi omnis harum quaerat explicabo amet. Eos consequatur a dolor eligendi natus ut totam. Quo, quaerat asperiores! Rerum iste at enim.
          Unde quasi, rem amet culpa excepturi totam illum sed doloremque iusto minima possimus, voluptatibus beatae delectus, commodi provident harum corporis error quia aut doloribus ex! Id nam omnis deleniti dignissimos.
          Porro assumenda voluptatum corporis tempore non cupiditate, consectetur fuga officia totam suscipit quae, temporibus, commodi quis mollitia necessitatibus dolorum praesentium sit quos iure inventore a. Magnam nobis est vitae deleniti.
          Nam nesciunt sint eum odit voluptatem? Alias accusantium at vel recusandae enim quos ut eveniet fuga aliquid velit cumque, numquam voluptas dicta error officiis expedita necessitatibus beatae, corporis non quisquam?
          Saepe, perspiciatis. Nemo quia temporibus cumque nihil. Harum ratione laudantium excepturi, numquam voluptates culpa enim nisi provident quia sequi exercitationem quaerat nesciunt placeat illo consequatur odio nulla mollitia inventore consequuntur.
          Exercitationem nemo molestiae id eligendi repudiandae sapiente consectetur quibusdam dolores cum, odit minus modi. Placeat unde, dignissimos soluta voluptate omnis suscipit excepturi iste consequatur fuga facere praesentium officia deserunt nobis?
          Voluptates odit cupiditate ut asperiores impedit, itaque neque, magni nesciunt deleniti assumenda quia, doloribus ipsum. Ullam dolorum eligendi exercitationem quisquam, suscipit similique adipisci maxime velit autem esse nobis accusamus quam.
          Mollitia exercitationem ipsam reiciendis illo quos labore earum aperiam doloremque velit doloribus iusto adipisci, laboriosam quasi nulla! Quam quo voluptates nobis, veniam atque nulla at repudiandae voluptatibus odio nisi maiores.
          Aliquam odit itaque distinctio asperiores fugit culpa officia! Ratione necessitatibus sunt debitis laborum eos nam ea, sapiente, aliquid inventore quae ex culpa qui! Fugit aut laborum enim fuga, nisi illum.
          Eum temporibus molestias minima veritatis quae error ex porro iste itaque sapiente beatae alias ipsum, quis, illo rem eveniet in architecto autem! Nihil minima provident praesentium velit nulla, animi a.
          Labore, totam possimus. Architecto reiciendis praesentium aut eius ullam, voluptate rem expedita quo odio nostrum reprehenderit? Impedit sunt soluta porro nemo, tempora id error molestias, magni illum nihil, unde commodi!
          Dolore iure aut corporis esse cupiditate recusandae maiores, ad, officia odit magni laborum commodi nostrum dolor excepturi mollitia eos optio voluptatibus earum facere quis harum incidunt dignissimos possimus. Explicabo, suscipit!
          Odit, distinctio similique tenetur ipsum culpa, nesciunt voluptatum temporibus recusandae deleniti a eius sapiente impedit rem sunt molestias vel qui quasi provident? Commodi omnis nam laboriosam unde sunt, cum atque?
          Iste saepe maiores nisi. Dolore, iure corporis? Dolore nemo non accusamus, ab molestiae necessitatibus numquam voluptatem enim, deleniti similique accusantium eveniet mollitia, minima consequatur aperiam ducimus! Rerum nesciunt dolore sequi!
          Iusto ullam dolorum quaerat sequi, molestias maxime fuga, iure illo voluptatem sunt rem quisquam commodi omnis culpa accusamus eveniet quos rerum aspernatur sint voluptate quia. Accusantium aperiam natus magni earum!
          Architecto tempore, quibusdam, culpa a excepturi tempora neque dolorem amet totam illum, nisi aspernatur beatae doloremque impedit fugit soluta eius dolor molestias est vel illo sunt nesciunt. Fuga, repellat ut?
          Sapiente eum, magni minus quisquam, quo numquam porro eligendi excepturi corrupti illum perferendis tempora officiis inventore recusandae consequuntur sint aspernatur fugiat blanditiis. Iste ea delectus, quia officia sit similique odit.
          Blanditiis architecto dolor ipsum itaque aperiam corporis velit, harum perspiciatis consectetur quisquam, odit nemo doloribus ipsa. Reprehenderit culpa, inventore natus dolor adipisci dolorem similique, ea harum provident odio ratione iste?
          Animi recusandae quis rerum sit dolores? Repellendus laborum dolores animi. Asperiores deleniti, doloremque consequatur velit corrupti esse necessitatibus voluptatibus beatae minus praesentium perferendis dolores! Iste unde earum possimus ab tenetur.
          Optio molestias aliquid quod praesentium facilis vero sit dicta consectetur. Ipsum magnam, temporibus cumque amet beatae aliquam, quae eveniet veritatis quam mollitia saepe velit minus, sed culpa cupiditate ipsa. Et?
          Pariatur illo expedita excepturi odit optio maxime fugiat velit officia alias aperiam odio iste provident dicta vero quidem ut laudantium laborum, nisi autem vitae dignissimos voluptates repellat? Recusandae, iusto unde!
          Voluptatem illo ex quia reiciendis mollitia totam qui quam aspernatur dignissimos, ad temporibus at magnam animi incidunt doloremque provident laborum. Cum, magni fugiat porro quae perspiciatis tempora sed temporibus architecto.
          Id vero molestiae ipsam, neque iste, corrupti veritatis eaque consequuntur rerum sit totam, soluta blanditiis tempora nisi incidunt? Quos ex quae cum dignissimos expedita dicta animi nihil rerum quisquam corrupti.
          Nobis consequuntur porro ratione ullam deserunt reiciendis vel odio eaque perspiciatis esse ipsum, eum illo cumque beatae eius maxime, vero deleniti voluptatum error fugit debitis tenetur officiis a inventore. Voluptates?
          Vel illum fugiat facilis odit iste, quasi commodi dicta nostrum delectus voluptate aliquid provident eveniet inventore consequatur tempora? Ipsa nobis placeat soluta dolore voluptatibus veniam! Corporis suscipit enim amet molestias.
          At, placeat nesciunt possimus cumque odio vel ea labore explicabo et recusandae aliquam doloribus voluptatum nisi necessitatibus commodi alias incidunt nemo perspiciatis optio libero eligendi. Molestiae quidem nisi natus eveniet?
          Eos quos doloribus porro incidunt dolor labore id, explicabo perferendis veniam dignissimos enim, ad est, earum odit voluptas dolore voluptatum ipsum ex recusandae provident nostrum vero temporibus tenetur officiis. Facere?
          Ipsam laborum, modi magnam autem sint vel, eaque maxime explicabo velit doloribus minima illo eveniet eum, corporis ratione sequi soluta! Culpa sit quos reiciendis ratione perspiciatis numquam aliquam esse. Totam!
          Iusto nemo repudiandae culpa praesentium vel doloremque quam rerum nulla. Doloremque blanditiis esse porro repellendus ipsum odio deserunt quos eaque alias vel in, commodi, vero non illo debitis assumenda nulla!
          Dolores cupiditate iure mollitia officiis quas impedit natus placeat animi, consequatur recusandae! Fugiat amet sit libero iste rerum. Enim iste hic distinctio accusamus minima cumque aliquam magnam repellendus dicta ipsum?
          Vel alias, recusandae, cum a blanditiis repellat dolorum aliquid, veniam ex vitae saepe et? Maiores illo quam commodi doloribus libero saepe eveniet rerum consequatur? Earum sed cum ea adipisci quae.
          Quae quibusdam magnam incidunt delectus adipisci ipsum dolor quos ipsa ullam commodi doloribus molestiae nulla magni repellendus, ipsam et iusto provident rem reiciendis eum consequuntur repudiandae eveniet aperiam! Sit, molestias.
          Soluta quasi, dignissimos officiis error nisi saepe eius non rem dolorem! Dolor quibusdam, molestiae, nam ab officia itaque asperiores voluptas commodi consequatur ipsum nobis cumque, quo non autem perspiciatis ratione!
          Numquam eos voluptatem vitae minus iure fugit ex natus. Possimus sed placeat ipsum temporibus reprehenderit animi sequi provident eos libero. Obcaecati eius voluptatibus commodi quas tenetur culpa, placeat quidem voluptatum!
          Reprehenderit possimus repudiandae, quas quaerat magni deleniti nulla quos. Accusantium a beatae rem velit eligendi sunt dolore alias incidunt fugit quas quibusdam eveniet distinctio accusamus possimus, adipisci earum harum quam.
          Id repudiandae dolorum ea quis cupiditate vel! Sequi eligendi eaque obcaecati qui quis maiores eos tempora quisquam porro, sapiente quibusdam iste! Tenetur aut itaque modi illum voluptas aspernatur, expedita sunt.
          Recusandae cum dolores, in reiciendis maiores totam vel. Recusandae aspernatur, sit repellendus quo expedita obcaecati fugiat odit quos! Voluptatibus excepturi modi maiores veritatis earum hic tempore deleniti, laborum quas eveniet.
          Eos expedita id eum nesciunt quod asperiores incidunt aperiam odit, consequatur porro ducimus cumque. Eos, deleniti, at accusamus explicabo, voluptates earum quod quasi unde dolorem saepe animi doloribus impedit temporibus?
          Dolores earum debitis accusamus omnis libero praesentium maiores explicabo itaque vero sequi error est, nesciunt nostrum veniam, iusto repudiandae corporis sit aspernatur aliquid quisquam dignissimos doloribus laboriosam. Ducimus, officiis eveniet.
          Dolor ipsa expedita illum dolorum recusandae maxime, voluptatum ut hic asperiores, corporis porro. Labore rerum amet pariatur perspiciatis voluptatibus, accusantium eaque maxime facere asperiores, incidunt quae expedita iste ipsa necessitatibus?
          At nihil ullam omnis officiis id nam illo hic ea unde doloribus voluptas quos, pariatur modi culpa. Sequi sint ratione, ab voluptatibus possimus iure sit dolorum corporis molestias cupiditate! Nisi!
          Veniam quasi eum beatae corporis magnam cum autem, praesentium est temporibus rem! Magnam dolor at debitis mollitia? Magni, odit assumenda dolore deserunt veritatis hic voluptatum a quo repellendus quod inventore?
          Numquam deserunt esse unde fuga ab. Quas quam alias quibusdam doloribus mollitia. Molestias recusandae facere doloribus quod illo deserunt in. Saepe accusantium facilis officiis vel nihil molestias consequatur ullam tenetur.
          Praesentium nostrum impedit natus ad maiores illum doloribus numquam dolores voluptas doloremque eos, nulla, magnam repudiandae! At ab explicabo autem officia, architecto deleniti cum, quo itaque omnis, qui aspernatur id.
          Itaque aliquid consectetur in quia numquam reprehenderit corrupti ullam adipisci rerum porro! Doloribus quaerat non quibusdam numquam minima, nam praesentium amet consectetur molestias facere possimus labore dolorum sequi enim! Accusamus?
          Soluta sunt eveniet obcaecati nostrum ab a, est quod corporis fuga ipsam ut enim incidunt facilis, debitis sapiente perferendis asperiores quam totam aspernatur perspiciatis, quaerat aut? Error illum hic deserunt?
          Optio quidem debitis atque quisquam nesciunt consectetur similique, ipsa autem voluptatibus corporis possimus vero nam odit quos repudiandae, necessitatibus harum reprehenderit veritatis molestiae deleniti provident in quasi. Vitae, illum quis?
          Rem voluptatum dolorem placeat dolores ipsa libero, accusantium, dolorum harum debitis molestiae architecto, laborum facilis impedit ipsum! Ea blanditiis non ut recusandae praesentium dolores atque voluptates, dolor veniam sint laudantium.
          A, voluptatibus. Voluptatibus porro veniam at, ab nesciunt, minus eaque nobis esse consequatur iste repellat. Dicta laborum harum, debitis quidem illo doloribus fuga doloremque ipsam, dolores neque dolor deserunt excepturi!
          Ex distinctio quae delectus architecto dolorum? Provident accusamus, voluptatem qui magnam excepturi blanditiis aliquid nostrum illum et doloribus laborum sapiente modi doloremque harum hic, enim totam ab! Iure, eaque dignissimos?
          Itaque debitis eligendi, distinctio suscipit quas consequuntur veritatis consectetur repellendus hic rerum dolorem sint sapiente corrupti autem adipisci asperiores nihil sequi eum. Omnis placeat reprehenderit accusamus minus numquam asperiores illo.
          Vero perspiciatis rem odio ab laboriosam, nisi, cupiditate sint quae repellat dolorem, velit eos sunt ut! Voluptatum voluptates repellat doloremque delectus minus ad eum assumenda nam architecto doloribus! Repellat, sint?
          Provident magnam ex iusto quae consequuntur, tempora quisquam. Fugit iure ducimus ratione ad sapiente, facilis labore quam commodi voluptas quaerat nam fuga, nisi maiores quasi maxime, quis aliquam temporibus incidunt.
          Iste totam voluptatem ducimus, eveniet dolorem dignissimos doloribus asperiores alias pariatur, ipsam commodi necessitatibus aspernatur tempore expedita animi iure veritatis voluptatibus unde harum minima quam! Reprehenderit sit temporibus velit odio.
          Explicabo iusto alias, architecto et libero distinctio cum? Quo veniam sunt vero tempora consequatur placeat soluta repudiandae ex quas. Corrupti itaque illum mollitia veritatis? Cumque asperiores quasi voluptatibus? Ullam, illo?
          Sint, vitae unde odio harum aliquam atque nam doloribus at voluptate sapiente aspernatur nobis, animi reprehenderit optio quia voluptatum! Laudantium quidem asperiores distinctio veniam quasi ex nesciunt officia porro nobis!
          In reiciendis qui sed, nobis incidunt facilis eveniet, iusto ducimus nemo voluptatem eos pariatur atque repellat animi culpa, cum mollitia saepe explicabo sint? Modi blanditiis tempora nihil tempore, expedita minima.
          Eligendi perferendis cupiditate sint quas doloribus ipsam. Maiores, quod sunt hic, quam dolor ipsa vel amet quae exercitationem placeat ipsam excepturi repellendus optio inventore suscipit error, repudiandae iusto quaerat nam!
          Laborum porro ab alias saepe iure. Dolorum, eligendi consectetur praesentium adipisci aut saepe qui pariatur iusto deleniti neque, nihil alias! Possimus quis provident eveniet modi nostrum odio distinctio autem esse.
          Dignissimos commodi quisquam suscipit? Numquam quisquam magni minus tempore vel repudiandae assumenda libero deleniti fugiat necessitatibus tempora rerum id eius, pariatur doloribus eos ratione est quia temporibus? Temporibus, sunt facilis.
          Dolorum, labore cum suscipit quaerat aspernatur id harum quibusdam nostrum odio non provident! Dicta aut optio ipsam voluptates tempore consequatur quod omnis inventore quidem doloribus, dolore quis laboriosam molestias illum!
          Fugiat beatae voluptates expedita repellat similique ad dolore omnis temporibus, vel quis quod totam. Commodi, expedita vel provident culpa deserunt voluptatibus natus, fugiat earum officia praesentium itaque. Ex, accusamus minus!
          Assumenda quia illum, nobis eveniet exercitationem rem ipsum perspiciatis enim fuga quod consequuntur illo deleniti ex atque sapiente earum necessitatibus temporibus. Tempora quis, quod mollitia minima facilis cum commodi nihil.
          Praesentium aliquam cumque optio possimus nulla consequatur totam ea. Corporis et porro cum, recusandae dignissimos delectus totam pariatur corrupti ut, nisi numquam fuga unde eligendi debitis odio possimus accusantium illo.
          Deleniti, consequatur! At, autem, totam architecto magni reprehenderit itaque ducimus maiores, doloremque commodi modi est perferendis a? Harum deleniti rerum ab tempora, similique numquam dicta, fugiat ullam maxime, sit pariatur?
          Perferendis sequi recusandae nostrum quam hic quis aliquam, nulla quidem ad fugiat at nesciunt, qui laudantium amet omnis nam id consectetur cum perspiciatis praesentium quasi quaerat maiores ut! Modi, ut.
          Laborum veritatis quod saepe quo a minus eum aliquid adipisci amet quasi tempore asperiores totam iusto fuga magnam ad placeat dolore sit, aspernatur rem labore aliquam nam quae hic? Harum!
          Animi sapiente libero recusandae quisquam voluptatem ea minima facere at autem corporis. Rem, officia odio obcaecati temporibus dolorem quaerat saepe sequi iure voluptas? Eius, corporis fugit nesciunt magni asperiores cumque.
          Fugit qui, ex voluptas voluptatum earum voluptates consequuntur aperiam, tempore accusantium eius molestias quia consequatur modi obcaecati natus quidem repellat esse sint dicta distinctio blanditiis? Numquam ullam soluta amet recusandae?
          A ipsum minus corrupti esse corporis fugit ea iure reiciendis, sapiente eligendi quas obcaecati alias, officiis tempora facere reprehenderit expedita itaque ratione voluptatibus sed et ex nobis? Praesentium, aperiam accusamus.
          At qui odit facere! Vero soluta pariatur sed fuga officiis alias, omnis id eligendi iste, error mollitia? Minus magnam quidem quo eum, consectetur eius corporis alias tempore quod rem? Autem?
          Tempore facilis, ex magni atque quae illo enim corrupti repudiandae voluptate quia cupiditate nobis aspernatur nostrum quas ad iusto, saepe deleniti dicta vero commodi, quod in natus nesciunt molestiae. Incidunt!
          Necessitatibus unde expedita distinctio impedit? Consectetur, quis quod ipsa laboriosam, nisi autem excepturi doloribus mollitia nemo porro nostrum ducimus, ut hic dolor dolores nobis aliquid. Totam aliquid nobis quibusdam debitis?
          Natus provident alias recusandae iste temporibus obcaecati minus, dolore perferendis quasi non a labore doloribus consequatur. Vitae dolor voluptatem et molestias eveniet asperiores, excepturi alias quis, ut, mollitia repellat tempore.
          Veritatis rem dignissimos, inventore nihil alias vero libero error natus autem illum facilis id totam blanditiis? Neque nulla molestiae soluta. Quidem, quaerat est! Quasi iste deleniti excepturi, ducimus asperiores illum.
          Doloremque velit rerum blanditiis qui vero quod eaque consectetur, fuga enim temporibus, repudiandae similique totam facilis esse! Hic molestiae doloremque, tempore praesentium minima alias porro adipisci harum, veritatis soluta assumenda!
          Temporibus illum necessitatibus excepturi amet, delectus dolor, consequatur sequi eligendi dicta odit quisquam repudiandae recusandae nesciunt. Illum, nulla ipsa optio voluptas debitis non, molestias, fugiat dignissimos impedit ex commodi quos!
          Omnis labore debitis inventore eius, iste totam voluptates perferendis doloremque cum nihil corrupti mollitia molestiae veritatis sequi distinctio reiciendis libero? Eaque porro neque vel dicta quibusdam impedit minus delectus itaque?
          In voluptatibus amet doloribus, assumenda accusantium et voluptas alias, illo nam repudiandae laborum error asperiores officia ullam reprehenderit ab! Esse dolor dolorum reiciendis magnam iure voluptatibus minima ex molestiae inventore.
          Mollitia dicta ullam blanditiis impedit, saepe perspiciatis nam laudantium aliquid a atque est maiores corrupti ipsam porro corporis suscipit, aspernatur deserunt ipsa magni enim itaque! Vero illo sunt ipsum tempore.
          Ipsam, illo aliquam officiis consequuntur fugit beatae repudiandae accusamus error perspiciatis, laborum sit saepe ad dicta necessitatibus, laudantium modi optio atque! Obcaecati officiis, nisi voluptatibus deserunt ipsum magni nostrum nihil?
        </div>
      </ModalComponent>
    </div>
  );
};

export default VisualEditorPageDocumentComponent;
