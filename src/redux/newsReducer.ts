import solo from '../images/solo.jpeg';
import ship from '../images/ship.jpeg';
import luk from '../images/luk.jpg';
import r2 from '../images/r2.jpg';
import kwaigon from '../images/kwaigon.jpg';
import mol from '../images/mol.jpg';
import yuoda from '../images/yuoda.jpg';
import weider from '../images/weider2.jpg';
import obiwan from '../images/obiwan.jpg';
import leya from '../images/leya.jpeg';


let initialValue = {
    news: [
        {title: 'Han Solo',
        images: [solo, ship],
        text: `First appearing in the original trilogy, Han Solo and his first mate Chewbacca are 
        smugglers who are hired by Ben Kenobi and Luke Skywalker to transport them to Alderaan so they 
        can deliver the stolen plans for the Death Star. Although initially unwilling to join the Rebel 
        Alliance in their fight against the Galactic Empire, he eventually does so and in the process 
        falls in love with Princess Leia, whom he eventually marries, becoming Luke's brother in-law.` },
        {title: 'Luke Skywalker',
        images: [r2, luk],
        text: `Luke Skywalker was a Force-sensitive Human male who helped defeat the Galactic Empire in the 
        Galactic Civil War and helped found the New Republic, as well as the New Jedi Order.
        Born in 19 BBY as the son of the fallen Jedi Knight Anakin Skywalker and the Queen and Senator 
        of Naboo, Padmé Amidala, Luke was raised on Tatooine and hidden from Emperor Palpatine and his father, 
        who had recently become Darth Vader, Dark Lord of the Sith. In 0 BBY, Skywalker's life changed forever. 
        A chance purchase of two droids, R2-D2 and C-3PO, led to him to receive training in the ways of the Force 
        from Jedi Master Obi-Wan Kenobi and to meet Han Solo, and Princess Leia Organa, who was, unbeknownst 
        to him, his twin sister. Skywalker then destroyed the first Death Star and joined the Rebel Alliance.`},
        {title: 'Kwaigon',
        images: [kwaigon, mol], text: `Within the fictional Star Wars universe, Qui-Gon mentors Obi-Wan Kenobi, 
        and is a powerful and wise, yet maverick and controversial Jedi Master, who has many uncommon beliefs 
        regarding The Force.[2] In The Phantom Menace, his and Obi-Wan's mission to protect Queen Padmé Amidala 
        leads him to encounter the young slave Anakin Skywalker, whom he believes to be the prophesied 
        "Chosen One" who will bring balance to the Force and insists upon his training as a Jedi against 
        the wishes of the Jedi High Council, who believe Skywalker to be too old for training. Qui-Gon is fatally 
        wounded in a lightsaber duel by the Sith Lord Darth Maul. In his final moments, he makes Obi-Wan promise 
        that he will train the young Skywalker.`},
        {title: 'ObiWan Kenobi',
        images: [obiwan, leya], text: `Obi-Wan Kenobi was a legendary Force-sensitive human male Jedi Master 
        who served on the Jedi High Council during the final years of the Republic Era. As a Jedi General, 
        Kenobi served in the Grand Army of the Republic that fought against the Separatist Droid Army 
        during the Clone Wars. Kenobi, however, was forced into exile as a result of the Great Jedi Purge. 
        As a mentor, Kenobi was responsible for training two members of the Skywalker family, Anakin and 
        Luke Skywalker, both of whom served in turn as his Padawan in the ways of the Force.`},
        {title: 'Darth Vader',
        images: [yuoda, weider], text: `Originally a slave on Tatooine, Anakin Skywalker is a Jedi prophesied 
        to bring balance to the Force. He is lured to the dark side of the Force by Chancellor Palpatine 
        (Darth Sidious) and becomes a Sith Lord, assuming the name of Darth Vader. After a lightsaber battle 
        with his former mentor Obi-Wan Kenobi on Mustafar, in which he is severely injured, Vader is transformed 
        into a cyborg. Now the Emperor's handpicked right-hand, he serves the Galactic Empire for over two 
        decades as the Commander-in-Chief of its forces, purging the last Jedi and hunting the Rebels. 
        Vader ultimately redeems himself by saving his son, Luke Skywalker, and killing Palpatine, sacrificing 
        his own life in the process.`},
        
    ]
};

type initialValueType = typeof initialValue;

const newsPageReducer = (state: initialValueType = initialValue) => {
    switch ('') {
        default:
            return state;
    }
}

export default newsPageReducer;