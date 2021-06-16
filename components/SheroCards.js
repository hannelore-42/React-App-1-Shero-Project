import { render } from '@testing-library/react';
import CardFlip from './CardFlip';

//creating objects 

const shero1 = {
    name: 'Maya Angelou',
    bio: 'Maya Angelou was an American author, actress, screenwriter, dancer, poet and civil rights activist best known for her 1969 memoir, I Know Why the Caged Bird Sings, which made literary history as the first nonfiction bestseller by an African American woman. Angelou received several honors throughout her career, including two NAACP Image Awards in the outstanding literary work (nonfiction) category, in 2005 and 2009.',
    image: 'https://whyy.org/wp-content/uploads/2020/07/maya2-768x432.jpg'
}

const shero2 = {
    name: 'Malala Yousafzai',
    bio: 'Malala Yousafzai often referred to as Malala, is a Pakistani activist for female education and the youngest Nobel Prize laureate. The taliban attempted to assassinate her for speaking out. Sh survived and is known for human rights advocacy, especially the education of women and children in her native Swat Valley in Khyber Pakhtunkhwa, northwest Pakistan, where the local Pakistani Taliban had at times banned girls from attending school. ',
    image: 'https://womenscenter.unc.edu/wp-content/uploads/sites/349/2017/03/Malala-Yousafzai_Antonio-Olmos.jpg'
}

const shero3 = {
    name: 'Wangari Maathai',
    bio: 'Wangari Maathai was the first African woman to receive the Nobel Peace Prize. She was also the first female scholar from East and Central Africa to take a doctorate (in biology), and the first female professor ever in her home country of Kenya. Maathai played an active part in the struggle for democracy in Kenya. In 1977 she started a grass-roots movement aimed at countering the deforestation. The so-called Green Belt Movement has contributed to the planting of over thirty million trees.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoQ56K8MAzC2kCQJwUwTyewrYRgJXGtsUpjQ&usqp=CAU'
}
const shero4 = {
    name: 'Marie Curie',
    bio: 'Marie Curie was a Polish and naturalized-French physicist and chemist who conducted pioneering research on radioactivity. She was the first woman to win a Nobel Prize, the first and the only woman to win the Nobel Prize twice, and the only person to win the Nobel Prize in two scientific fields. She was the first woman to become a professor at the University of Paris in 1906.',
    image: 'https://www.nobelprize.org/images/marie-curie-12835-content-portrait-mobile-tiny.jpg'
}

const shero5 = {
    name: 'Greta Thunberg',
    bio: 'Greta  Thunberg  is a Swedish environmental activist who is internationally known for challenging world leaders to take immediate action against climate change. After Thunberg addressed the 2018 United Nations Climate Change Conference, student strikes took place every week somewhere in the world.  She received numerous honours and awards, being the youngest Time Person of the Year, inclusion in the Forbes list of The Worlds 100 Most Powerful Women (2019), and three consecutive nominations for the Nobel Peace Prize (2019–2021).',
    image: 'https://i.guim.co.uk/img/media/bebb8c5677ea8addac562dca36b0ac4e9987b4a4/0_0_4684_2810/master/4684.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=6e29650ea4b525e1d4b2ab8353c46b61'
}
const shero6 = {
    name: 'Ruth Bader Ginsberg',
    bio: 'The second female justice to sit on the U.S. Supreme Court, RBG is a notorious gender-rights badass. In the 1960s, she faced gender discrimination in the workplace despite having top-notch academic credentials. But the shackles of patriarchy did not stop RBG from succeeding as she was one of only nine female students during her time at Harvard and became the lead counsel for the ACLU Women’s Rights Project. RBG can be credited with building a better legal foundation of women’s equality.',
    image: 'https://storage.googleapis.com/afs-prod/media/953f0dabf77644469f375294efec7bc5/3000.jpeg'
}
const shero7 = {
    name: 'Ida B. Wells',
    bio: 'African-American journalist Ida B. Wells was a leader in the Civil Rights Movement, battling sexism, racism, and the threat of extreme violence. Born into slavery, Wells’ journalistic skills opened up the world to the inhumane conditions of the South, particularly during the lynching era. Having traveled abroad, she was also busy on the ground floor boycotting and filing lawsuits to fight injustice. She is considered the first female journalist.',
    image: 'https://whyy.org/wp-content/uploads/2020/03/idabwells-768x512.jpg'
}
const shero8 = {
    name: 'Savitribai Phule',
    bio: 'Savitribai Phule was an Indian social reformer, educationalist, and poet from Maharashtra. She is regarded as the first female teacher of India. She played an important and vital role in improving womens rights in India. She is regarded as the mother of Indian feminism. Phule and her husband founded one of the first Indian girls school in Pune, at Bhide wada in 1848. She worked to abolish the discrimination and unfair treatment of people based on caste and gender.',
    image: 'https://wallpapercave.com/wp/wp7370748.jpg'
}
const shero9 = {
    name: 'Sophie Wilson',
    bio: 'Sophie Mary Wilson is an English computer scientist. Wilson first designed a microcomputer during a break from studies at Selwyn College, Cambridge. She was instrumental in designing the BBC Micro, including the BBC BASIC programming language whose development she led for the next 15 years. She first began designing the ARM reduced instruction set computer (RISC) in 1983, which entered production two years later. It is now the most widely used processor architecture in smartphones.  In 2011, she was listed in Maximum PC as number 8 in an article titled "The 15 Most Important Women in Tech History".',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Sophie_Wilson.jpg'
}



function SheroCards() {
    
    return (

        <div className="SheroCards">
            <div className="cards">

                <CardFlip className="cards"
                    name={shero1.name}
                    image={shero1.image}
                    bio={shero1.bio}
                />

                <CardFlip className="cards"
                    name={shero2.name}
                    image={shero2.image}
                    bio={shero2.bio}
                />
                <CardFlip className="cards"
                    name={shero3.name}
                    image={shero3.image}
                    bio={shero3.bio}
                />

                <CardFlip className="cards"
                    name={shero4.name}
                    image={shero4.image}
                    bio={shero4.bio}
                />
                <CardFlip className="cards"
                    name={shero5.name}
                    image={shero5.image}
                    bio={shero5.bio}
                />
                <CardFlip className="cards"
                    name={shero6.name}
                    image={shero6.image}
                    bio={shero6.bio}
                />
                <CardFlip className="cards"
                    name={shero7.name}
                    image={shero7.image}
                    bio={shero7.bio}
                />
                <CardFlip
                    name={shero8.name}
                    image={shero8.image}
                    bio={shero8.bio}
                />
                <CardFlip className="cards"
                    name={shero9.name}
                    image={shero9.image}
                    bio={shero9.bio}
                />

            </div>
        </div>
    );
}


export default SheroCards;
