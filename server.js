const express = require('express');
const app = express();
const port = 3000;

const fs = require('fs');
app.engine('madeline', (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);
    const rendered = content
      .toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>')
      .replace('#content#', '<div>' + options.content + '</div>');
    return callback(null, rendered);
  });
});

app.set('vieww', './views');
app.set('view engine', 'madeline');

app.get('/about', (req, res) => {
  res.render('template-1', {
    title: 'FIFA WORLD CUP',
    message: "Almost 50% of the world's population watches the competition",
    content:
      "With over eight billion people on the planet, it's hard to imagine over half of the population sitting down and watching the World Cup, but figures suggest it's true.",
  });
});

app.get('/fact', (req, res) => {
  res.render('template-1', {
    title: 'FIFA WORLD CUP',
    message: 'England did not take part in the first three tournaments',
    content: `England is often considered one of the top teams in the World Cup. Their recent efforts have been standout, and everyone is expecting a big performance at the 2022 World Cup.

      Initially, England chose not to travel to Uruguay in 1930, believing they were too good for the competition. The Three Lions didn't play in their first World Cup until 1950. In 1928, all British nations withdrew from FIFA in a dispute over payments to amateur players.`,
  });
});

app.get('/another-fact', (req, res) => {
  res.render('template-1', {
    title: 'FIFA WORLD CUP',
    message: `The First Women's World Cup was in 1991`,
    content: `England's women’s team is flying high after their victory at the European Championships in the summer of 2022, but the history of women's football is much shorter than their male counterparts.

    The Women’s World Cup has only been held eight times. The first competition took place in 1991 and the USA is the team to beat in the women's game, winning four tournaments so far. The 1991 Women's World Cup saw matches last just 80 minutes. This seems rather unfair given, at one point, women’s football was bigger than men’s.`,
  });
});

app.get('/win-lose', (req, res) => {
  res.render('template-1', {
    title: 'FIFA WORLD CUP',
    message: 'Biggest World Cup Winners and Losers',
    content: `Brazil sits right at the top of the table when it comes to World Cup winners in the men’s game. They are the only team to have appeared in all tournaments to date and have been crowned champions five times. They are followed in quick succession by Germany, who have won four tournaments (three times as West Germany).

    At the other end of the table, you've got Indonesia, a team who have only ever played one match in the World Cup. Mexico has also racked up the most World Cup match losses with 27 to their name, though they do have 16 wins too`,
  });
});

app.get('/record', (req, res) => {
  res.render('template-1', {
    title: 'FIFA WORLD CUP',
    message: 'First Ever Winter World Cup',
    content: `The 2022 instalment marks the first winter World Cup since the competition began. It is also the first World Cup to be held in the Middle East.

    The extreme heat in Qatar in June and July means moving the tournament to the winter months makes it more manageable and minimises the potential health risks of playing and spectating in such heat. It will also be the most expensive World Cup to date.`,
  });
});

app.get('/benefits', (req, res) => {
  res.render('template-2', {
    title: 'WEIGHT TRAINING BENEFIT',
    message: 'IMPROVED BONE HEALTH',
    content: `While most people might avoid thinking of bone health or diseases like osteoporosis in their 30s, it’s never too early to incorporate lifestyle habits that encourage strong bones. In fact, most people reach peak bone mass by age 25-30, and they will slowly begin to lose bone mass by age 40, with a more rapid increase later in life. For women, this is even more evident in the decade following menopause, when they can lose 40% of inner bone and 10% of outer bone mass.

    According to a study in the 2014 Journal of Family and Community Medicine, 12 weeks of strength training increased bone mineral density in the lower spine by 2.9% and femur (thigh) by 4.9%. Strength training keeps bones healthy and can improve bone health for already weakened bones.`,
  });
});

app.get('/health', (req, res) => {
  res.render('template-2', {
    title: 'WEIGHT TRAINING BENEFIT',
    message: 'BETTER CARDIOVASCULAR HEALTH',
    content: `Increased levels of abdominal fat (also known as visceral fat) are associated with an increased risk of cardiovascular disease. Visceral fat is located in and around vital organs, so when you can replace that with lean muscle mass, it improves your overall cardiovascular health.

    One of the best ways to achieve this goal is through strength training, which forces increased blood flow and oxygen to muscles.`,
  });
});

app.get('/energy', (req, res) => {
  res.render('template-2', {
    title: 'WEIGHT TRAINING BENEFIT',
    message: 'INCREASED ENERGY LEVELS',
    content: `While most people might avoid thinking of bone health or diseases like osteoporosis in their 30s, it’s never too early to incorporate lifestyle habits that encourage strong bones. In fact, most people reach peak bone mass by age 25-30, and they will slowly begin to lose bone mass by age 40, with a more rapid increase later in life. For women, this is even more evident in the decade following menopause, when they can lose 40% of inner bone and 10% of outer bone mass.

    According to a study in the 2014 Journal of Family and Community Medicine, 12 weeks of strength training increased bone mineral density in the lower spine by 2.9% and femur (thigh) by 4.9%. Strength training keeps bones healthy and can improve bone health for already weakened bones.`,
  });
});

app.get('/abs', (req, res) => {
  res.render('template-2', {
    title: 'WEIGHT TRAINING BENEFIT',
    message: ' LOWER ABDOMINAL FAT',
    content: `Muscle mass actually determines your basal metabolic rate, so as you reduce fatty tissue and increase lean muscle, your metabolism increases, which means you’ll burn more calories. The great part about this is that you burn calories while you’re working out, but your body continues to do the work when you do strength training and then continues to burn calories after your workout, providing further benefit.`,
  });
});

app.get('/mood', (req, res) => {
  res.render('template-2', {
    title: 'WEIGHT TRAINING BENEFIT',
    message: 'IMPROVED MOOD',
    content: `Exercise triggers the release of endorphins, which plays a role in improved emotional health, and while any exercise is better than none, strength training can also improve mood through controlled successes. The strength training at Black Box Fitness, for example, encourages individuals to push themselves to the next level and then reward them with successes based on achievements such as increased weight amounts. That’s a fantastic way to improve one’s mood and sense of accomplishment!`,
  });
});

app.listen(port, function () {
  console.log(`Listening on port ${port}....`);
});
