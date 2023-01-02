import Link from 'next/link'
import Image from 'next/image'
import index from '../events/index.scss'

<div class="center background-black ">
    <div class="row row-cols-1 row-cols-md-1 row-cols-lg-1 row-cols-xl-3 row-cols-xxl-3 row-cols-row-cols-sm-3 g-4">
        <div class="col">
        <div class="card h-100">
            <Image src="/valeaoltului.webp" class="card-img-top" alt="First Event"/>
            <div class="card-body">
            <h5 class="card-title merienda">Malaia Lake, Catalin Sima</h5>
            <p class="card-text montserrat"><strong>Catalin Sima</strong> is an international DJ and Producer.His passion for electronic music started back in 2012, but in late March 2019 he started producing music and began collaboration with a lot of international artists.He is using Tech-House, Deep-House, House and Minimal to provide his energetic sets along his schedule.
            </p>
            </div>
            <div class="card-footer text-center">
                <Link href="https://youtu.be/ivoYWV5T20g" target="_blank" class="btn btn-primary background-green hover-effect">View the event</Link>
            </div>
        </div>
        </div>
        <div class="col">
        <div class="card h-100">
            <Image src="/castelulcorvinilor.webp" class="card-img-top" alt="Second Event" />
            <div class="card-body">
            <h5 class="card-title merienda">Corvin`s Castle, Nusha</h5>
            <p class="card-text montserrat"><strong>Nusha</strong> is an international DJ that started back in 2007, but she has been into the music since she was very young.She has shared stages across the world with several well-known techno legends and played some of the greatest techno festivals. She has a lot of experience and she has developed her own signature sound which never seems to fail!</p>
            </div>
            <div class="card-footer text-center">
                <Link href="https://youtu.be/IuF8s_Vh6ck" target="_blank" class="btn btn-primary background-green hover-effect">View the event</Link>
            </div>
        </div>
        </div>
        <div class="col">
        <div class="card h-100">
            <Image src="/bog.webp" class="card-img-top" alt="Third Event" />
            <div class="card-body">
            <h5 class="card-title merienda">Palas Garden Iasi, BOg</h5>
            <p class="card-text montserrat">Romanian native <strong>BOg</strong> is steadily forging his reputation as a DJ, Producer, Label Owner and Artist with tremendous taste, style, integrity and execution. Currently based in Paris his unique musical vision creates special dance-floor moments across the globe every weekend, whether it’s through his DJ sets that take audiences on a real journey .. or through his music featuring regularly in playlists of renowned peers and DJs at the forefront of the underground scene.</p>
            </div>
            <div class="card-footer text-center">
                <Link href="https://youtu.be/Kc2Xt_CNerI" target="_blank" class="btn btn-primary background-green hover-effect">View the event</Link>
            </div>
        </div>
        </div>
    </div>
</div>