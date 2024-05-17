import React, { useEffect, useState } from 'react'

export default function index() {
    const [showButton,setShow]=useState(false);
    const handleScroll=()=>{
        if(window.scrollY>200){
            setShow(true)
        }else{
            setShow(false);
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",handleScroll)
        return ()=>{
            window.removeEventListener("scroll",handleScroll);
        }
    },[])
    const handleBackTop=()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth',
        })
    }
  return (
    <div>
     { showButton &&<button onClick={handleBackTop} style={{position:'fixed',bottom:'20px',right:'20px'}}>Back</button>}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eveniet molestiae esse obcaecati suscipit, debitis vitae nihil unde praesentium, libero consectetur maxime tenetur placeat, perspiciatis quibusdam quo molestias iste voluptatum.
      Repellat voluptatum minus, veniam eius corporis molestias eaque assumenda corrupti distinctio rerum illum, laboriosam tenetur placeat incidunt voluptatem! Quisquam nulla placeat similique reiciendis ipsam voluptatem veniam dignissimos rerum error provident.
      Praesentium consequuntur consequatur reiciendis qui, repellendus at vel sapiente. Nulla ex libero, culpa veritatis ullam provident quasi beatae quod delectus odit mollitia est, cupiditate corrupti laudantium facere numquam incidunt nesciunt.
      Incidunt, repellendus perferendis sint, deserunt ut rem optio eaque aperiam mollitia distinctio ab ad! Sit voluptas, animi eligendi doloremque laudantium totam dolore veritatis deserunt! Voluptate maxime assumenda perferendis incidunt quae.
      Aperiam deleniti quaerat, cum repellat exercitationem maxime iste! Tenetur consequuntur sint itaque eveniet temporibus a mollitia blanditiis commodi. Nulla saepe tempora illo magnam eius ducimus cupiditate placeat ad quidem itaque.
      Molestias labore optio, fugiat illo doloribus minima harum tempora nihil ut id vero quas neque nulla modi nostrum facere veniam veritatis deserunt sequi esse ipsam consectetur nisi in commodi. Voluptatum.
      Blanditiis ad, maxime dignissimos sapiente at perferendis illum, adipisci quam eligendi rerum vitae delectus itaque! Nihil necessitatibus, laudantium ab, earum a saepe repudiandae cumque nobis possimus enim dignissimos ullam vel!
      Officia quod molestiae, rem nesciunt magni corrupti magnam consectetur necessitatibus voluptates quaerat placeat dolores repellat hic! Aliquid distinctio veniam laboriosam ex, odit minus aperiam. Enim illo et quaerat. Fuga, magni?
      Harum, modi corporis consectetur at perferendis vitae, maxime, ipsam fuga mollitia vero quas voluptate rerum repellendus distinctio reprehenderit! Quas dolorem impedit tenetur, eos magnam minus voluptate sit mollitia provident tempora!
      Laborum, debitis rem doloremque illo tempore possimus. Rem numquam facilis nisi fugiat in deleniti dignissimos ducimus quasi fuga, esse debitis beatae molestiae doloribus reiciendis unde, neque consequuntur magni! Ab, aspernatur.
      Praesentium quae debitis, obcaecati quaerat odit qui hic ab facilis libero non fuga nihil cupiditate minus similique cumque eius optio, quisquam commodi laudantium excepturi placeat ullam maiores pariatur modi. A.
      Nulla ipsum fugiat quis officia est necessitatibus quibusdam accusamus pariatur, ad sint deserunt minima tempora et eos sapiente odit modi temporibus delectus numquam saepe ducimus voluptatem neque! Repudiandae, qui illo.
      Necessitatibus, pariatur nesciunt voluptate aliquid quasi minus soluta cum nostrum totam distinctio, praesentium nisi. Aperiam tempora maxime sint laudantium dolor incidunt, ipsum quos aliquam ducimus cum beatae debitis velit alias?
      Possimus doloribus id consequuntur obcaecati sint iusto suscipit reiciendis maiores ipsa accusamus quibusdam culpa excepturi laudantium quas eveniet ut assumenda, fugit distinctio modi praesentium iure dolorem voluptates libero aut. Cupiditate.
      Modi, commodi doloremque incidunt officia adipisci blanditiis accusamus, possimus laboriosam quam quasi alias nostrum quod obcaecati dolorem dolor magni quia. Cupiditate velit beatae doloribus necessitatibus a nisi incidunt in totam.
      Earum nemo sunt, natus cupiditate veniam aperiam sed nihil molestias illo accusantium hic quibusdam dignissimos beatae repellat ea saepe fugit facilis optio et consectetur consequatur? Voluptate amet perspiciatis officiis molestiae.
      Iure consectetur temporibus vel cupiditate, sit facilis nam ipsa exercitationem deleniti omnis nostrum debitis saepe harum iste rem corrupti aliquam tempora voluptas laudantium nihil sequi distinctio cumque! Omnis, quasi facere.
      Deleniti optio obcaecati ratione eius expedita quasi eligendi, iste tempora, nihil, debitis numquam modi ducimus recusandae et sequi itaque sed nulla sapiente? Quidem eveniet nobis quas ea autem expedita commodi!
      Minus corporis obcaecati amet molestias quos nemo vero fuga facere, repudiandae dicta enim. Consectetur nobis assumenda in dolorem quasi unde blanditiis, commodi praesentium cum quod totam magni quisquam accusamus. Repellendus!
      Doloremque expedita, voluptatibus distinctio ipsum quidem, voluptate aperiam aliquam delectus voluptatem quaerat quis ea corporis. Facere aperiam, harum perferendis nesciunt, maxime ex unde corrupti totam aliquid error quo hic aspernatur!
      Totam fugiat ipsam quod dignissimos eveniet omnis sed optio, velit praesentium aspernatur iure soluta sapiente non, consectetur laboriosam iusto perferendis enim fuga sint error voluptas, autem cum. Dolor, ex repellendus?
      Provident eum molestias ea obcaecati sapiente dolorem aut cum sint sequi qui, commodi quaerat delectus earum debitis inventore voluptas officia voluptatibus molestiae, ut, iste ipsum neque facilis labore. Voluptates, officia.
      Provident nostrum perferendis impedit facilis similique repellendus veniam ipsa laborum nisi vel architecto est culpa fuga saepe illo, natus, alias dignissimos, vitae molestiae! Odit adipisci ab est hic fugiat harum?
      Explicabo ducimus minus vero autem alias debitis cupiditate deserunt repellat odit nostrum, eaque ipsa nemo commodi rem recusandae ipsum accusantium provident placeat ipsam, aliquid officia. Itaque perspiciatis ipsum magni error!
      Quia accusamus eum ipsum illum esse deserunt unde veniam aliquam consequatur maxime, explicabo alias tempore commodi placeat. Nesciunt consectetur iste necessitatibus natus quos adipisci ipsum. Numquam modi sed amet obcaecati!
      Eius accusantium voluptas velit cum voluptatem eos dicta, iure veniam architecto laudantium vel illo vero, unde voluptates tempora numquam reprehenderit! Rem nisi, quas neque accusantium autem expedita ducimus explicabo deleniti!
      Inventore, molestias. Deleniti tenetur sed sit beatae dignissimos. Consequatur sequi vel amet nisi laborum non harum, voluptatibus molestias quas nemo impedit ratione esse laudantium illum dignissimos culpa magni quia maiores!
      Odio ipsum, enim quod maxime repellat repellendus at placeat exercitationem praesentium eius eaque maiores deserunt eum soluta blanditiis dolorum optio dolor, sit consequatur quis explicabo excepturi a impedit rem. Esse.
      A adipisci optio voluptatum corrupti ad sequi expedita at ipsa itaque quaerat excepturi cumque, amet soluta omnis est culpa quas consequatur voluptate nisi cum aliquam eligendi molestias. Error, sed nam?
      Saepe assumenda pariatur quam, esse quo asperiores quasi laudantium nihil magni consequuntur ducimus placeat aperiam quisquam numquam modi. Fugiat veniam quibusdam quas est, harum voluptate explicabo sapiente unde possimus incidunt.
      Mollitia corrupti aut repellat possimus illum ab fugit fuga expedita numquam voluptates. Exercitationem esse reprehenderit, aliquid sunt repellendus, sint sit, incidunt ullam fugit praesentium omnis. Doloremque ipsam quidem sapiente quam.
      Dolorum enim a vero aspernatur officia quam fuga corrupti sed nostrum delectus vitae sapiente officiis, voluptatum dolore magni, vel autem ab nemo? Id assumenda accusantium dolorum sunt cupiditate eius voluptatem!
      Blanditiis doloribus asperiores dolore id nam minus, mollitia excepturi eius cum nemo eaque maiores! Laboriosam odio quia eos tenetur quaerat recusandae ipsam voluptatibus quibusdam deserunt fuga, quisquam vel perspiciatis facere?
      Cupiditate nesciunt blanditiis in sit, animi impedit perspiciatis excepturi quam placeat ullam, repellendus incidunt aperiam? Molestiae nesciunt at culpa repellendus aliquid voluptates, eos deleniti quam quos magnam, eveniet labore esse?
      Magni suscipit aspernatur quos praesentium, repellat, officia atque deleniti impedit ex quaerat qui totam doloribus quod sint fuga saepe tempore aliquam, et odit. Doloribus dolore et sapiente! Quibusdam, officiis beatae!
      Omnis, laudantium atque facilis aliquid sed itaque molestias consectetur! Ab aspernatur modi nostrum quidem consequuntur, blanditiis itaque eos cum explicabo temporibus assumenda dolore exercitationem, vitae, at eius autem iusto dolores.
      Saepe voluptatem dolorem sed maxime dolores modi magni amet fuga quisquam vel iste recusandae cupiditate, sit adipisci eius iure incidunt quis et vitae ea dignissimos, eveniet dicta dolorum iusto? Repudiandae!
      Mollitia ab nisi quae eius error vitae eum officia nobis? Voluptate repellat eveniet cum, doloremque a nisi debitis ipsam! Quo sunt id ratione obcaecati quia? Accusantium vitae accusamus incidunt molestias!
      Voluptatum nulla corrupti quaerat ea rerum, sapiente consectetur temporibus. Illo velit id error molestiae dignissimos aut? Optio repellendus ex dicta, quibusdam officiis ad magni autem corrupti voluptatum. Cum, in aliquid!
      Voluptas sunt quaerat reprehenderit atque, dolor minus ab, pariatur praesentium architecto corporis, nemo in libero molestiae beatae? Culpa, voluptatibus sapiente. Dolores ea, voluptate provident eius praesentium ex ipsum rerum corrupti.
      Voluptate dolore ab, hic optio voluptatem nam inventore aut porro aspernatur illum odit neque corrupti quas quasi soluta! Adipisci tenetur repellendus placeat quisquam quas aperiam harum molestias dicta facere quibusdam!
      Harum necessitatibus, dolorum non tempore ratione tenetur, quo ut, aperiam fugit velit repellendus? Maiores eius aut voluptatum ut tenetur rem illum. Voluptate aliquam architecto obcaecati optio unde ratione nisi fugiat!
      Tenetur maxime aliquid aut aperiam corporis ex expedita nisi? Id officiis et perferendis voluptatibus ad accusamus, dolorem possimus illum odio sunt a deserunt repudiandae praesentium architecto quos dignissimos ut excepturi?
      Cumque saepe, officia commodi tempora deserunt iste placeat itaque quo mollitia inventore nam optio corrupti minus ducimus dolores at vitae dignissimos et sapiente ab culpa laboriosam quasi facilis architecto. Ratione.
      Repellat eveniet ex doloribus tempore neque. Neque sit provident quidem adipisci magni eligendi vel voluptates quos qui, error tempore temporibus ad rerum voluptate hic nulla aperiam ab ipsam eaque. Corrupti.
      Maxime cumque consequuntur saepe asperiores ullam rerum doloremque ea laboriosam temporibus, ab totam, incidunt voluptate maiores. Fuga ducimus id magni. Vitae atque ullam libero repudiandae nihil voluptatem, autem aperiam cupiditate?
      Eaque facere saepe nesciunt, voluptate officiis adipisci eos consequatur explicabo cupiditate alias corrupti possimus! Modi placeat eius labore, nemo odio consequuntur commodi? Deserunt corporis nostrum obcaecati harum accusamus reprehenderit tempore.
      Accusantium cum cumque aut, sint aliquam rem dolores placeat voluptatum, tempore ea mollitia veritatis fugit, eius numquam dicta quos esse! Ipsa modi aspernatur possimus natus, molestiae accusamus dicta molestias vel.
      Ducimus est quae consequuntur ad error dolores pariatur quisquam nisi quaerat! Suscipit praesentium, tempora voluptatibus sed eligendi accusamus doloribus odio quos, id qui commodi aperiam deserunt adipisci quibusdam maxime? Eligendi?
      Quo quae debitis, perferendis voluptate excepturi minima incidunt facere? Deleniti delectus exercitationem iusto vitae optio sapiente itaque dignissimos expedita est quod, officia impedit possimus eligendi! Distinctio rerum minus expedita omnis?</p>
    </div>
  )
}
