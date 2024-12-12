var config = {
    style: 'mapbox://styles/ed1990/clshd5fko001d01qw5qk66k79',
    accessToken: 'pk.eyJ1IjoiZWQxOTkwIiwiYSI6ImNtNGxmc2Q5bDAxYjkya3M3ZGs1cDF2NzgifQ.JCvSbkquZpgPo4I1J83vNQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: '<p style="text-align: center;"><img src="Danone.png" alt="danone" style="max-width: 200px; height: auto; display: block; margin: 0 auto;"></p>',
    subtitle: '<span style="font-family: \'Roboto\'; color: #ffffff; font-size: 2.2rem; font-weight: 500;">Danone România sărbătorește 25 de ani de producție pe piața locală',

    byline: '<a href="https://panorama.ro/author/panorama/" target="_blank" style="color:white;">Panorama - Conținut sponsorizat</a> <p> <img src="./scroll.png"> </p> <p> scroll </p> ',
    footer: '<br> 12 decembrie 2024 <br> <a href="https://panorama.ro/author/andrei-luca-popescu/" target="_blank">Editor: Andrei Luca Popescu</a> ',
    chapters: [
        {
            id: 'cap1.1',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            horizontalScroll: false,
            hidden: true,
            title: '',
            image: '',
            description: '',
            overlayImage: 'blank.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 15,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        
        
        
        {
            id: 'cap1',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            horizontalScroll: false,
            hidden: false,
            title: '2024',
            image: '',
            description: '<p> În acest an, Danone România <span style="background-color: #1770bb; color: white; padding: 2px 5px; border-radius: 3px;">sărbătorește 25 de ani</span> de producție pe piața locală. Acest parcurs a fost definit de investiții constante, inovație continuă, preocupare, calitatea produselor și pentru comunitățile în care activează.</p>',
            overlayImage: 'blank.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 15,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        


        {
            id: 'cap2',
            daysAgo: 760,
            showTimeline: false,
            horizontalScroll: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '1996', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Povestea Danone în România a început în 1996, odată cu preluarea și modernizarea fabricii de lactate Miorița din București.',
            overlayImage: 'scene1.gif',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: 'Dataset 1',
            //     dataPoints: [10.5, 8.6, null, null]
            
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: 'Rata șomajului', // Customize maximum value for y-axis
        
        
        },
        
        {
            id: 'cap3',
            daysAgo: 760,
            showTimeline: false,
            horizontalScroll: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '1997', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'În 1997, Danone România a adus pe piața românească o noutate: iaurturile cu fructe importate din Polonia și Ungaria, deschizând astfel consumatorilor poarta către o categorie de produse până atunci necunoscută.',
            overlayImage: 'scene2.gif',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: 'Dataset 1',
            //     dataPoints: [10.5, 8.6, null, null]
            
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: 'Rata șomajului', // Customize maximum value for y-axis
        
        
        },

        {
            id: 'cap4',
            daysAgo: 760, 
            showTimeline: false,
            horizontalScroll: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '1999', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'În 1999, Danone și-a consolidat prezența pe piața locală prin introducerea primelor iaurturi produse în fabrica din București –<span style="background-color: #1770bb; color: white; padding: 2px 5px; border-radius: 3px;">„Natural”, „Delicios” şi „Natural de baut”. </span> ',
            overlayImage: 'scene3.gif',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: 'Dataset 1',
            //     dataPoints: [10.5, 8.6, null, null]
            
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: 'Rata șomajului', // Customize maximum value for y-axis
        
        
        },

        {
            id: 'cap5',
            daysAgo: 760,
            showTimeline: false,
            horizontalScroll: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'De-a lungul celor 25 de ani, Danone România <span style="background-color: #1770bb; color: white; padding: 2px 5px; border-radius: 3px;">a investit peste 100 de milioane de euro</span>  în modernizarea și extinderea capacităților de producție ale fabricii din București, transformând-o într-un hub regional de producție pentru România și alte 14 țări: Moldova, Țările Adriatice, Ungaria, Grecia, Bulgaria, Cehia, Spania, Franța, Belgia, Marea Britanie, Italia, Slovacia,  Polonia. ',
            overlayImage: 'scene4.gif',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: 'Dataset 1',
            //     dataPoints: [10.5, 8.6, null, null]
            
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: 'Rata șomajului', // Customize maximum value for y-axis
        
        
        },

        {
            id: 'cap6',
            daysAgo: 760,
            showTimeline: false,
            horizontalScroll: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Investițiile constante în fabrica din București au transformat-o în cea mai performantă unitate Danone din Europa, cu o capacitate de producție de 75.000 de tone de iaurt anual. Zilnic, fabrica produce 1 milion de iaurturi pe zi, destinate atât pieței interne cât și exportului.',
            overlayImage: 'scene5.gif',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: 'Dataset 1',
            //     dataPoints: [10.5, 8.6, null, null]
            
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: 'Rata șomajului', // Customize maximum value for y-axis
        
        
        },

        {
            id: 'cap7',
            daysAgo: 760,
            showTimeline: false,
            horizontalScroll: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Prin programul socio-economic „O șansă pentru familia ta”, inițiat în 2012, în parteneriat cu Fundația Heifer și Polaris, Danone România a investit 7 milioane de euro pentru a sprijini gospodarii locali și pentru a stimula antreprenoriatul. ',
            overlayImage: 'scene6.gif',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: 'Dataset 1',
            //     dataPoints: [10.5, 8.6, null, null]
            
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: 'Rata șomajului', // Customize maximum value for y-axis
        
        
        },

        {
            id: 'cap8',
            daysAgo: 760,
            showTimeline: false,
            horizontalScroll: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'În prezent, laptele care ajunge în fabrica Danone din București este 100% lapte românesc achiziționat de la cei 220 de gospodari din Zimnicea și de la cele 20 de ferme locale. ',
            overlayImage: 'scene7.gif',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: 'Dataset 1',
            //     dataPoints: [10.5, 8.6, null, null]
            
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: 'Rata șomajului', // Customize maximum value for y-axis
        
        
        },

        {
            id: 'cap9',
            daysAgo: 760,
            showTimeline: false,
            horizontalScroll: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Fabrica din București, renumită pentru tehnologia sa unică de „fermentare a iaurtului în pahar”, produce un portofoliu diversificat care include 12 mărci și peste 120 de sortimente. Utilizează exclusiv lapte proaspăt, colectat de la fermierii români, garantând astfel calitatea și prospețimea care definesc produsele.',
            overlayImage: 'scene8.gif',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: 'Dataset 1',
            //     dataPoints: [10.5, 8.6, null, null]
            
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: 'Rata șomajului', // Customize maximum value for y-axis
        
        
        },

        

        



        


        


















        


        
        

    ]
};