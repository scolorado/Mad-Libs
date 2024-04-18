document.getElementById('generateStory').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const adjective1 = document.getElementById('adjective1').value;
    const adjective2 = document.getElementById('adjective2').value;
    const verb = document.getElementById('verb').value;
    const noun = document.getElementById('noun').value;
    const adverb = document.getElementById('adverb').value;
  
    const story = `One day, ${name} had the ${adjective1} opportunity of meeting Taylor Swift. Upon seeing her, ${name} felt ${adjective2} and ${adverb} approached her. ${name} couldn't help but ${verb} and offer her a ${noun}.`;
  
    document.getElementById('storyOutput').innerHTML = `<p>${story}</p>`;
  });
  