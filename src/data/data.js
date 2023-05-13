import logo from "../assets/Logo.svg";
import action1 from "../assets/header/Vector1.svg"
import action2 from "../assets/header/Vector2.svg"
import action3 from "../assets/header/Vector3.svg"
import button from "../assets/header/Button 36px.svg"
import phone from "../assets/main/phone.svg"
import mail from '../assets/main/mail.svg'
import strong_side1 from "../assets/main/central-bar/Frame 1.svg"
import strong_side2 from "../assets/main/central-bar/Frame 2.svg"
import strong_side3 from "../assets/main/central-bar/Frame 3.svg"

import car1 from "../assets/main/section2/cars cards/car 1.png"
import car2 from "../assets/main/section2/cars cards/car 2.png"
import car3 from "../assets/main/section2/cars cards/car 3.png"
import car4 from "../assets/main/section2/cars cards/car 4.png"
import car5 from "../assets/main/section2/cars cards/car 5.webp"
import car6 from "../assets/main/section2/cars cards/car 6.jpg"

let data = {

    header: {
        links: [
            {id: 1, link: "", name: "About Us"},
            {id: 2, link: "", name: "All Cars"},
            {id: 3, link: "", name: "Blog"},
            {id: 4, link: "", name: "Contact"}
        ],
        logo: logo,
        actions: [
            {id:1, img: action1},
            {id:2, img: action2},
            {id:3, img: action3},
            {id:4, img: button},
        ]
    },
    section1: {
        description: "Car import services with delivery to your doorstep.",
        actions: [
            {id:1, img: button, description: ''},
            {id:2, img: phone, description: "+ 971 55 811 9024"},
            {id:3, img: mail, description: "request@example.com"}
        ],
        strong_sides: [
            {id:1, img: strong_side1, title: 'Professional approach to clients', description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'},
            {id:2, img: strong_side2, title: 'Protect all payments', description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'},
            {id:3, img: strong_side3, title: 'Real reviews from clients', description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'}
        ]
    },
    section2: {
        cards: [
            {id: 1, img: car1, title: "2019 BMW 640 Gran Turismo i xDrive", description: "Used • 27,057 mi • Petrol\n", price: "$ 50 000"},
            {id: 2, img: car2, title: "2019 Mitsubishi ASX Sport 2.0 SE", description: "Used • 27,057 mi • Petrol\n" , price: "$ 30 000"},
            {id: 3, img: car3, title: "2021 Genesis GV80 2.5T", description: "Used • 27,057 mi • Petrol" , price: "$ 50 000"},
            {id: 4, img: car4, title: "2020 Subaru Ascent Touring 7-Passenger", description: "Used • 27,057 mi • Petrol\n" , price: "$ 35 000"},
            {id: 5, img: car5, title: "2019 Mercedes-Benz GT63 AMG", description: "Used • 17,057 mi • Petrol\n" , price: "$ 150 000"},
            {id: 6, img: car6, title: "2020 Toyota Camry 2.5 Hybrid", description: "Used • 57,543 mi • Petrol\n" , price: "$ 35 000"},
        ]
    },
    footer: {
        logo: logo,
        social_media: [
            {id:1, img: "", link: ''}
        ]
    }
}

export default data;