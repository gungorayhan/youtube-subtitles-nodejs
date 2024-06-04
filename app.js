const fs = require('fs');
const { getSubtitles } = require('youtube-captions-scraper');


const videoId = 'ADJKbuayubE';
const language = 'en';

async function downloadSubtitles(videoId, language) {
    try {
      const subtitles = await getSubtitles({
        videoID: videoId,
        lang: language
      });
  
    
      const srt = subtitles.map((subtitle, index) => {
        // const start = new Date(subtitle.start * 1000).toISOString().substring(11, 12).replace('.', ',');
        // const end = new Date((subtitle.start + subtitle.dur) * 1000).toISOString().substring(11, 12).replace('.', ',');
        const start = subtitle.start
        const end =subtitle.dur
  
        return `${index + 1}\n${start} --> ${end}\n${subtitle.text}\n`;
      }).join('\n\n');
  console.log( typeof srt)
      
      fs.writeFileSync(`${videoId}_${language}.cvs`, srt);
      console.log('Altyazı başarıyla indirildi!');
    } catch (error) {
      console.error('Hata:', error.message);
    }
  }

downloadSubtitles(videoId, language);