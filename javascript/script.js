function scrollToSection(sectionID) {
    const section = document.getElementById(sectionID);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function founderCardClicked(founderID) {
    const founder = document.getElementById(founderID);
    if (founder) {
    
        if (founderID === 'sai')
        {
            // open another webpage
            window.open('https://www.saimangipudi.dev/', '_blank');
        }
        else if (founderID === 'alex')
        {
            // open another webpage
        }
        else if (founderID === 'brandon')
        {
            // open another webpage
        }
    }
}

function founderMouseHover(founderID)
{
    const founderText = document.getElementById('display-founder-name');

    if (founderID === 'sai')
    {
        founderText.innerHTML = "Sai Mangipudi";
    }
    else if (founderID === 'alex')
    {
        founderText.innerHTML = "Alex Patron";
    }
    else if (founderID === 'brandon')
    {
        founderText.innerHTML = "Brandon Thomas";
    }
}

function resetFounderText()
{
    const founderText = document.getElementById('display-founder-name');
    founderText.innerHTML = "OUR FOUNDERS";
}