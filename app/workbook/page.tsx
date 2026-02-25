import CoverPage from "@/components/workbook/CoverPage";
import ChapterBanner from "@/components/workbook/ChapterBanner";
import ShortAnswer from "@/components/workbook/ShortAnswer";
import EssayBox from "@/components/workbook/EssayBox";
import JournalPrompt from "@/components/workbook/JournalPrompt";
import VocabCard from "@/components/workbook/VocabCard";
import VocabGrid from "@/components/workbook/VocabGrid";
import VerseBox from "@/components/workbook/VerseBox";
import SidebarBox from "@/components/workbook/SidebarBox";
import MapBox from "@/components/workbook/MapBox";
import SectionRule from "@/components/workbook/SectionRule";
import FillBlank from "@/components/workbook/FillBlank";
import PrintButton from "@/components/PrintButton";

export default function WorkbookPage() {
  return (
    <div className="workbook-body">
      <PrintButton />

      <CoverPage
        series="Arms of Deliverance Learning Series"
        title="Cultural & Historical Companion Workbook"
        subtitle="A 50-Page Study of World War II Europe, the Lebensborn Program, B-17 Aviation, and the Comet Line Underground"
        author="Tricia Goyer"
        description="Unit study materials for homeschool families — Grades 6-12"
      />

      <SectionRule />

      {/* ======================================================= */}
      {/* UNIT 1 — THE WORLD IN 1944 */}
      {/* ======================================================= */}
      <ChapterBanner chapter="Unit 1" title="The World in 1944 — Europe at War" />

      <VocabGrid>
        <VocabCard term="Axis Powers" definition="Germany, Italy, and Japan — the three main nations fighting against the Allied Powers in World War II." />
        <VocabCard term="Allied Powers" definition="The United States, United Kingdom, Soviet Union, France, and other nations allied against the Axis." />
        <VocabCard term="Occupation" definition="Military control of a foreign country by an enemy nation. Germany occupied Belgium in 1940." />
        <VocabCard term="Luftwaffe" definition="The German air force in World War II." />
        <VocabCard term="Wehrmacht" definition="The unified armed forces of Nazi Germany, including army, navy, and air force." />
        <VocabCard term="SS (Schutzstaffel)" definition="The elite paramilitary organization of Nazi Germany that ran the concentration camps and carried out racial policies." />
        <VocabCard term="RuSHA" definition="Rasse- und Siedlungshauptamt — the SS Race and Settlement Main Office, which oversaw racial classification and the Lebensborn program." />
        <VocabCard term="Lebensborn" definition="A Nazi SS program that established maternity homes to increase the birth rate of racially 'pure' Aryan children for the Reich." />
        <VocabCard term="Gestapo" definition="The secret state police of Nazi Germany; responsible for hunting political enemies, Jews, and resistance members." />
        <VocabCard term="Resistance" definition="Underground networks of civilians who secretly worked against the Nazi occupation in their countries." />
      </VocabGrid>

      <SectionRule />

      <SidebarBox title="Timeline: Europe, 1940-1945">
        <ul style={{ margin: 0, paddingLeft: "1.25rem" }}>
          <li><strong>May 1940</strong> — Germany invades and occupies Belgium, France, Netherlands</li>
          <li><strong>Dec 1941</strong> — USA enters WWII after attack on Pearl Harbor</li>
          <li><strong>1942</strong> — Mass deportations of European Jews to death camps begin</li>
          <li><strong>Jun 1943</strong> — 91st Bomb Group begins operations from Bassingbourn</li>
          <li><strong>Jun 6, 1944</strong> — D-Day: Allied landings at Normandy</li>
          <li><strong>Aug 25, 1944</strong> — Paris liberated</li>
          <li><strong>Sep 1944</strong> — Belgium liberated by Allied forces</li>
          <li><strong>Dec 16, 1944</strong> — Battle of the Bulge begins</li>
          <li><strong>Apr 11, 1945</strong> — Buchenwald concentration camp liberated</li>
          <li><strong>May 8, 1945</strong> — V-E Day: Germany surrenders</li>
        </ul>
      </SidebarBox>

      <ShortAnswer question="1. In what year did Germany occupy Belgium? Who was the head of Nazi Germany?" lines={2} />
      <ShortAnswer question="2. What does 'occupation' mean? How might living under occupation change daily life for ordinary Belgian citizens?" />
      <ShortAnswer question="3. Look at the timeline above. How long did the German occupation of Belgium last before it was liberated?" lines={2} />
      <div className="no-break">
        <ShortAnswer question="4. Arms of Deliverance is set in Belgium, England, France, and Germany. Place these countries on the map below and label their capitals." lines={1} />
        <MapBox label="Europe, 1944 — Draw and label: Belgium, England, France, Germany" height="280px" />
      </div>

      <SectionRule />

      {/* ======================================================= */}
      {/* UNIT 2 — BELGIUM UNDER OCCUPATION */}
      {/* ======================================================= */}
      <ChapterBanner chapter="Unit 2" title="Belgium Under the Nazi Occupation" />

      <VerseBox
        reference="Chapter 1 — Arms of Deliverance"
        text="Tucked between France, Holland, and Germany, Belgium had fallen to Nazi control in 1940, four years earlier. Yet many acted as if the war were not more than a minor disturbance — especially the Germans who filled and controlled the streets, embracing the country as their own."
        version="Novel"
      />

      <ShortAnswer question="1. Describe the Grote Markt in Brussels as Katrine experiences it in Chapter 1. What symbols of Nazi power does she see?" />
      <ShortAnswer question="2. What sign was posted outside the cafe Katrine entered? How does this one sign summarize the nature of Nazi occupation?" lines={2} />
      <ShortAnswer question="3. Jewish people in occupied territories were required to wear a yellow Star of David on their clothing. What was the purpose of this requirement? How would this affect daily life?" />
      <ShortAnswer question="4. Describe what forged identity papers were and why someone like Rebecca Lodz would need them." />
      <JournalPrompt prompt="Imagine you are a Belgian teenager in 1944. Your city is occupied by German soldiers. You cannot speak freely, your neighbors have disappeared, and there are soldiers on every street corner. Write a journal entry describing one day in that world." />

      <SectionRule />

      {/* ======================================================= */}
      {/* UNIT 3 — THE LEBENSBORN PROGRAM */}
      {/* ======================================================= */}
      <ChapterBanner chapter="Unit 3" title="The Lebensborn Program — A History of Eugenics" />

      <SidebarBox title="What Was Lebensborn?">
        Lebensborn (meaning 'Fount of Life') was an SS program founded by Heinrich Himmler in 1935.
        Its stated goal was to increase the birth rate of children considered 'racially valuable' by
        Nazi standards. The program established maternity homes across Germany and occupied Europe
        where approved women — many of them single — could give birth to children fathered by SS
        officers. Babies deemed acceptable were registered as German citizens. Those considered
        impure were abandoned or killed. The program also oversaw the kidnapping of thousands of
        children from Poland and other Slavic countries who were judged to look sufficiently
        'Aryan.' Historians estimate that 20,000 or more children were born through the
        Lebensborn program.
      </SidebarBox>

      <VocabGrid>
        <VocabCard term="Eugenics" definition="The idea that human populations can be 'improved' by controlling who is allowed to have children — rejected by both science and Christian ethics." />
        <VocabCard term="Aryan" definition="The Nazi term for people they considered racially superior — typically blond, blue-eyed Northern Europeans. Not a scientific category." />
        <VocabCard term="Rassenschande" definition="German for 'racial defilement' — the Nazi crime of a relationship between an Aryan and a non-Aryan (especially a Jewish person). Punishable by imprisonment." />
        <VocabCard term="Geburtsfeier" definition="The Nazi naming ceremony held for Lebensborn babies, replacing Christian baptism with a pagan pledge to Germany." />
        <VocabCard term="Mutterkreuz" definition="The 'Mother's Cross' — a medal awarded by the Nazi regime to German women who bore 4 or more children. Bronze (4-5), Silver (6-7), Gold (8+)." />
      </VocabGrid>

      <ShortAnswer question="1. What was the Wegimont castle, and why was Katrine sent there?" />
      <ShortAnswer question="2. In Chapter 14, Katrine attends a 'Geburtsfeier' — a Nazi naming ceremony for a newborn. How does this ceremony differ from a Christian baptism? What does its pagan nature reveal about Nazi ideology?" />
      <ShortAnswer question="3. What happened to Anneliese's twin girl who was born with an undeveloped hand? (Ch. 14) What does this reveal about the true nature of the Lebensborn 'care' for children?" />
      <ShortAnswer question="4. How does the Bible's teaching on the image of God (Genesis 1:26-27) directly oppose eugenics? Write your answer using at least one KJV Bible verse." />
      <EssayBox
        prompt="The Nazi regime used scientific-sounding language to justify what was morally reprehensible. In 2-3 paragraphs, explain what the Lebensborn program reveals about what happens when a government decides which human beings have value. Use specific details from the novel and at least one Scripture reference."
        lines={14}
      />

      <SectionRule />

      {/* ======================================================= */}
      {/* UNIT 4 — WOMEN WAR CORRESPONDENTS */}
      {/* ======================================================= */}
      <ChapterBanner chapter="Unit 4" title="Women on the Front Lines — War Correspondents in WWII" />

      <SidebarBox title="Women War Correspondents — Historical Facts">
        During World War II, approximately 100 women were accredited as war correspondents by Allied
        governments. They worked for major news agencies like the Associated Press, wire services,
        magazines, and radio stations. Despite formal accreditation, women were routinely barred from
        combat zones, briefing rooms, and airfield access that male reporters enjoyed. Notable real
        correspondents included: Martha Gellhorn (the first woman to land at Normandy on D-Day),
        Lee Miller (Vogue photographer who covered the liberation of concentration camps), and Sigrid
        Schultz (Chicago Tribune bureau chief in Berlin). In the novel, Mary Kelley and Lee O'Donnelly
        represent this generation of women who refused to let gender determine their access to history.
      </SidebarBox>

      <ShortAnswer question="1. Mary Kelley works for the Associated Press (AP). What is a wire service, and why was it important in the era before television?" />
      <ShortAnswer question="2. In Chapter 5, we learn Mary got her first story by accident. Describe how it happened, and explain why her editor's two-word comment ('next time') became so important to her." />
      <ShortAnswer question="3. Compare Mary Kelley and Lee O'Donnelly as reporters. What specific advantages does each one have? What obstacles does each face?" />
      <ShortAnswer question="4. Mary uses her German language ability (Ch. 26) to save Eddie and Samuel's lives. She had this skill from growing up in a German immigrant neighborhood in New York. How does this illustrate the idea that God can use ordinary background and skill for extraordinary purposes?" />
      <JournalPrompt prompt="Lee starts the novel as a socialite using her family connections to get stories. By Chapter 30 she is extending her empty hands to Buchenwald survivors. Write a character sketch of Lee: describe who she was at the beginning and who she became by the end. What changed her?" />

      <SectionRule />
      {/* ======================================================= */}
      {/* UNIT 5 — THE B-17 AND THE 91ST BOMB GROUP */}
      {/* ======================================================= */}
      <ChapterBanner chapter="Unit 5" title="The B-17 Flying Fortress and the 91st Bomb Group" />

      <SidebarBox title="The 91st Bomb Group — The Ragged Irregulars">
        The 91st Bombardment Group (Heavy) was a unit of the United States Army Air Forces
        (USAAF), 8th Air Force. Stationed at RAF Bassingbourn in Cambridgeshire, England from
        October 1942, the 91st became one of the most decorated and most storied bomb groups
        of World War II. Nicknamed "The Ragged Irregulars," the group flew the Boeing B-17
        Flying Fortress on strategic bombing missions throughout occupied Europe. The 91st
        flew over 340 missions and suffered some of the highest casualty rates of any American
        bomb group. To complete a tour of duty, a B-17 crew member was originally required to
        fly 25 combat missions — later raised to 30, and eventually 35 — before being rotated
        home. Eddie Anderson is flying his 30th (final) mission when his plane goes down.
      </SidebarBox>

      <VocabGrid>
        <VocabCard term="B-17 Flying Fortress" definition="An American four-engine heavy bomber built by Boeing. Carried a crew of 10 men and up to 8,000 lbs of bombs. Known for its ability to absorb heavy damage and still fly home." />
        <VocabCard term="Navigator" definition="The crew member responsible for plotting the aircraft's course using maps, instruments, and mathematical calculations. Eddie Anderson's position." />
        <VocabCard term="Bombardier" definition="The crew member who operated the Norden bombsight and released the bombs over the target." />
        <VocabCard term="Flak" definition="Anti-aircraft artillery fire — exploding shells sent up from the ground to destroy aircraft. Named from German 'Fliegerabwehrkanone.'" />
        <VocabCard term="Initial Point (IP)" definition="The landmark where the bomb run begins. From the IP to the target, the plane must fly straight and level with no evasive action." />
        <VocabCard term="Formation Flying" definition="B-17s flew in tight box formations to concentrate defensive gunfire and protect the group from fighter attacks." />
        <VocabCard term="Tour of Duty" definition="The number of combat missions a crew member was required to complete before being rotated home. At the time of the novel, this was 30 missions." />
        <VocabCard term="Pathfinder" definition="A specially equipped B-17 carrying H2X radar ('Mickey') that led formations bombing through cloud cover when the target could not be seen." />
      </VocabGrid>

      <ShortAnswer question="1. What is a navigator's role on a B-17? Using Chapter 17-18 details, describe what tools Eddie would use on a mission." />
      <ShortAnswer question="2. At the briefing in Chapter 17, the CO says the target is Berlin. Why does this announcement cause a particular reaction from the crew? What made the Berlin run especially dangerous?" />
      <ShortAnswer question="3. Describe the temperatures a B-17 crew experienced at altitude (Chapter 18). What special gear did they require? Why?" lines={3} />
      <ShortAnswer question="4. Eddie was flying his 30th and final mission. What happens on this mission, and why does its destruction over Belgium rather than Germany become important for the rest of the story?" />
      <ShortAnswer question="5. In Chapter 19, when fighters attack and flak fills the air at the IP, Eddie cannot order the plane to deviate from its course. Why? What does this tell you about the discipline required during a bomb run?" />

      <SectionRule />

      <ChapterBanner chapter="Unit 5 Lab" title="B-17 Crew Positions — Diagram and Label" />
      <div className="no-break">
        <MapBox label="Draw a side-view diagram of a B-17 Flying Fortress. Label these positions: Pilot / Co-Pilot / Navigator / Bombardier (Nose) / Radio Operator / Ball Turret Gunner / Waist Gunners (2) / Tail Gunner / Top Turret Gunner" height="250px" />
        <ShortAnswer question="Which position would you have chosen, and why? Which position do you think was most dangerous? Support your answer with details from the novel." />
      </div>

      <SectionRule />

      {/* ======================================================= */}
      {/* UNIT 6 — THE COMET LINE ESCAPE NETWORK */}
      {/* ======================================================= */}
      <ChapterBanner chapter="Unit 6" title="The Comet Line — Belgium's Secret Escape Network" />

      <SidebarBox title="The Comet Line — Historical Facts">
        The Comet Line (Réseau Comète) was a Belgian-led World War II escape network that helped
        hundreds of Allied servicemen evade capture and return to England. Founded in 1941 by
        Andrée de Jongh, a Belgian woman in her twenties, the line passed airmen and soldiers
        through Brussels, across France, over the Pyrenees Mountains, and into Spain — and from
        there by Allied consulate back to England. Over the course of the war, the Comet Line
        helped an estimated 700-800 Allied servicemen escape. Over 800 Belgians and French
        citizens who worked for the line were arrested by the Gestapo; hundreds were executed
        or died in concentration camps. The network used ordinary people — teachers, nurses,
        housewives, priests — who were willing to risk their lives for strangers.
      </SidebarBox>

      <VocabGrid>
        <VocabCard term="Escape Network" definition="An organized, secret chain of safe houses and guides that helped downed Allied airmen evade capture and return to Allied territory." />
        <VocabCard term="Safe House" definition="A home or building secretly used to shelter people being hunted by the enemy." />
        <VocabCard term="Courier" definition="A person who carried secret messages or materials between members of the underground resistance." />
        <VocabCard term="MI9" definition="British military intelligence organization that supplied escape and evasion materials (hidden compasses, silk maps, currency) to resistance networks and POW camps." />
        <VocabCard term="MIS-X" definition="The American equivalent of MI9 — supplied escape kits to USAAF crews, including the kits carried by Eddie Anderson after bailing out." />
        <VocabCard term="Escape Kit" definition="Standard-issue kit given to all USAAF airmen: included a silk map of the region, compass, currency, and a photograph for a forged ID card." />
      </VocabGrid>

      <ShortAnswer question="1. After bailing out of his B-17, Eddie's first priority is to bury his parachute and take inventory of his escape kit. What items did a standard USAAF escape kit contain, and why was each item important?" />
      <ShortAnswer question="2. Who is Roger, and what enormous risk does he take for Eddie and Mary in Chapter 21? What specific action did he take to explain the blood from Eddie's arm wound to German soldiers?" />
      <ShortAnswer question="3. In Chapter 22, the resistance leader Magda asks Eddie a series of questions before helping him. Why did she do this — could this test have been dangerous for Eddie?" />
      <ShortAnswer question="4. The Comet Line was run largely by women and ordinary civilians. Why might the Nazis have underestimated this kind of resistance? What made civilian networks so hard to destroy?" />
      <ShortAnswer question="5. Mary sends her gold necklace — a treasured connection to her father Donald — with the courier Julien as identification for Lee. What does this sacrifice reveal about how Mary has changed over the course of the novel?" />

      <JournalPrompt prompt="If you were a Belgian farmer in 1944 and a wounded American airman knocked on your barn door at midnight, what would you do? Write honestly about the calculation — what it would cost you, what you feared, and what you believed — and explain your decision." />

      <SectionRule />

      {/* ======================================================= */}
      {/* UNIT 7 — THE BATTLE OF THE BULGE */}
      {/* ======================================================= */}
      <ChapterBanner chapter="Unit 7" title="The Battle of the Bulge — Germany's Last Gamble" />

      <SidebarBox title="Battle of the Bulge — Key Facts">
        On December 16, 1944, Nazi Germany launched its last major offensive on the Western Front —
        a massive armored surprise attack through the Ardennes Forest of Belgium and Luxembourg.
        The attack created a large 'bulge' in the Allied lines, giving the battle its name.
        German forces aimed to reach the port of Antwerp and split the Allied armies in two.
        American forces — many of them cut off, out of ammunition, and facing brutal winter
        weather — held on at key crossroads towns. The 101st Airborne Division was surrounded
        at Bastogne; when asked to surrender, General Anthony McAuliffe responded with a single
        word: 'NUTS.' St. Vith, where Mary and Eddie race for the American lines in Chapter 28,
        was defended by the 7th Armored Division until December 23, 1944. Over 600,000 American
        soldiers were involved; approximately 75,000 American casualties resulted, making it
        the deadliest battle in American history.
      </SidebarBox>

      <ShortAnswer question="1. When does the German offensive begin in the novel? (Ch. 24) How does it affect Eddie and Mary's escape plans?" />
      <ShortAnswer question="2. Eddie and Mary are stopped by German feldgendarmerie (military police) on the road to Verviers while carrying baby Samuel and speaking German. (Ch. 26) How does the Battle of the Bulge make this encounter both more dangerous and more believable?" />
      <ShortAnswer question="3. In Chapter 28, Eddie and Mary break through American lines at St. Vith. Describe the scene — what is happening at the town, and how do they get inside?" />
      <ShortAnswer question="4. What intelligence about German troop movements does Mary gather from the soldiers on the truck in Chapter 26? How does she pass this information on?" />
      <div className="no-break">
        <ShortAnswer question="5. Lee drives 30 miles under artillery fire to reach St. Vith. What does this scene reveal about how she has changed from the society reporter who first appeared in Chapter 4?" />
        <MapBox label="Sketch the Battle of the Bulge — mark: Belgium, the Ardennes Forest, St. Vith, Bastogne, and the direction of the German advance" height="250px" />
      </div>

      <SectionRule />

      {/* ======================================================= */}
      {/* UNIT 8 — LIBERATION AND BUCHENWALD */}
      {/* ======================================================= */}
      <ChapterBanner chapter="Unit 8" title="Liberation — Weimar, Patton's Army, and Buchenwald" />

      <SidebarBox title="Buchenwald Concentration Camp">
        Buchenwald (KZ Buchenwald) was located on Ettersberg Hill above Weimar, Germany. It was
        one of the largest concentration camps on German soil, holding over 250,000 prisoners
        from 1937 to 1945. More than 56,000 people died at Buchenwald from execution, starvation,
        disease, and medical experiments. American forces of the 89th Infantry Division liberated
        the camp on April 11, 1945 — days before Germany's surrender. General Dwight Eisenhower
        ordered Allied officers to personally tour the camps so they could never be accused of
        ignorance. Journalist Edward R. Murrow broadcast a radio report from Buchenwald on April
        15, 1945, that shocked the American public. In the novel, Lee O'Donnelly witnesses the
        liberation. She puts away her notebook and simply extends her hands to the survivors.
      </SidebarBox>

      <ShortAnswer question="1. Describe Lee and Patrick's approach to Buchenwald in Chapter 30. What is the first physical sensation that tells them the camp is near?" />
      <ShortAnswer question="2. Why does Lee put her notebook away? What does this action say about the limits of journalism — and about the priority of being human?" lines={3} />
      <ShortAnswer question="3. The city of Weimar — famous for Goethe and Bach — is only a few miles from Buchenwald. Patrick says 'they've really let the place go.' Why is the dark humor at the beginning of Chapter 30 followed by such horror?" />
      <ShortAnswer question="4. Lee says: 'There was no pride in [being the voice to tell this story], ... but there was honor in knowing that she'd been chosen, despite her frailties and fears. Or maybe because of them.' What is the difference between pride and honor?" />
      <EssayBox
        prompt="Write a 3-4 paragraph response to this question: How does Chapter 30 complete Lee O'Donnelly's character arc? Who was she in Chapter 4 aboard the Queen Mary, and who is she at Buchenwald? What specific events and Scripture truths shaped her transformation? Be specific and use direct references to scenes in the novel."
        lines={16}
      />

      <SectionRule />
      {/* ======================================================= */}
      {/* UNIT 9 — CHARACTER STUDY */}
      {/* ======================================================= */}
      <ChapterBanner chapter="Unit 9" title="Character Study — Five Portraits of Faith and Fear" />

      <SidebarBox title="Character Overview">
        Arms of Deliverance weaves five major perspective characters whose stories
        intersect in Belgium during the final year of WWII. Each character is defined
        by a tension between fear and faith, concealment and revelation, self-reliance
        and surrender. As you study each character below, look for the specific moment
        in the novel where their inner struggle is most clearly seen.
      </SidebarBox>

      <ShortAnswer question="REBECCA LODZ (Katrine): In one sentence, describe who Rebecca really is behind the false name. Then describe the specific moment in Chapter 15 where she finally declares her real identity aloud. What did this cost her?" lines={5} />
      <ShortAnswer question="EDDIE ANDERSON: Eddie introduces himself as 'a navigator' — someone who doesn't plan the mission or fly the plane, but keeps track of true north. (Ch. 23) How is this a metaphor for his faith? Give two specific examples from the novel where Eddie 'kept track of true north.'" lines={5} />
      <ShortAnswer question="MARY KELLEY: Mary's entire career was built on earning respect. What did she finally want more than professional recognition, and how did she learn to ask for it? (Reference Ch. 16 and Ch. 29)" lines={5} />
      <ShortAnswer question="LEE O'DONNELLY: Lee arrives at Wegimont in Ch. 10 wearing an orange-and-yellow chiffon scarf — the same scarf she later gives away to a starving French family. How does the detail of the scarf serve as a symbol of her transformation from self-focused to others-focused?" lines={5} />
      <ShortAnswer question="HENDRICK SCHWARTZ: Hendrick is the novel's antagonist. But in Chapter 24, he has a nightmare where German soldiers steal a baby from his arms and he suddenly understands what the Polish parents felt when he took their children. He dismisses the dream. What does this moment reveal about him? Why does the novel include this scene?" lines={5} />

      <SectionRule />

      {/* ======================================================= */}
      {/* UNIT 10 — FAITH IN THE NOVEL */}
      {/* ======================================================= */}
      <ChapterBanner chapter="Unit 10" title="Faith in the Novel — Scripture, Prayer, and Spiritual Turning Points" />

      <SidebarBox title="Scripture Referenced in the Novel">
        <ul style={{ margin: 0, paddingLeft: "1.25rem" }}>
          <li>2 Chronicles 32:1 — Ch. 1 epigraph (evil invades)</li>
          <li>Psalm 23:4 — Ch. 2 epigraph (Eddie's bedtime verse)</li>
          <li>Proverbs 3:5-6 — Ch. 6 (Eddie's core verse, the navigator metaphor)</li>
          <li>Psalm 91:4 — Ch. 9 (Eddie's D-Day prayer for the soldiers below)</li>
          <li>Luke 1:78-79 — Ch. 23 (Eddie's Bible; leads to Mary's conversion)</li>
          <li>John 14:6 — Ch. 23 (Mary's conversion verse)</li>
          <li>Psalm 62:2 — Ch. 27 (Eddie holding Samuel at night)</li>
          <li>1 Samuel 1-2 — Ch. 30 (Rebecca's identification with Hannah)</li>
        </ul>
      </SidebarBox>

      <ShortAnswer question="1. Chapter 9 describes Eddie's D-Day prayer as he flies over 11,000 Allied planes and 4,000 ships below him. He prays for soldiers he cannot see and will never meet. Why does this detail matter for his character?" />
      <ShortAnswer question="2. Mary's first instinctive prayer comes when flak bursts around the B-17 (Ch. 18): 'Oh, dear God. Oh, Lord, help us.' This is not theological — it's terror. Yet it is her first prayer. What does this tell us about how faith often begins?" />
      <ShortAnswer question="3. Trace Mary's prayer journey from Ch. 18 (first instinctive prayer) to Ch. 23 (conversion prayer). List each step and what moved her forward." lines={6} />
      <ShortAnswer question="4. Eddie tells Mary he is 'a navigator — someone who keeps track of true north' and pats his Bible. (Ch. 23) How does his professional identity as a navigator reflect his spiritual identity?" />
      <ShortAnswer question="5. In Chapter 30, Rebecca chooses to tell the children the story of Hannah (1 Samuel 1-2). What is the parallel between Hannah and Rebecca? Name at least three specific similarities." />

      <JournalPrompt prompt="Consider the novel's title: Arms of Deliverance. Who in the novel is delivered — from what, and by whom? And who are the 'arms' that bring that deliverance? Write a response that draws on at least three specific scenes from the novel." lines={10} />

      <SectionRule />

      {/* ======================================================= */}
      {/* UNIT 11 — GEOGRAPHY AND TRAVEL */}
      {/* ======================================================= */}
      <ChapterBanner chapter="Unit 11" title="Geography — Tracing the Journey" />

      <ShortAnswer question="1. List, in order, the major locations where the story takes place. Begin with New York and Brussels in Chapter 1." lines={4} />
      <ShortAnswer question="2. Why was Bassingbourn, England chosen as the base for the 91st Bomb Group? What geographic advantage did England provide for bombing missions into Europe?" />
      <div className="no-break">
        <ShortAnswer question="3. The Wegimont castle is described as having four towers, a moat, and a courtyard. It is located near Liège, Belgium. Look at a map — how far is Liège from the German border? Why was this significant during the Battle of the Bulge?" />
        <MapBox label="Trace the journey of Eddie and Mary after their bailout: landing in Belgium → Roger's farm → Wegimont castle → road to Verviers → Verviers church → American lines at St. Vith" height="280px" />
      </div>
      <ShortAnswer question="4. What mountain range do the Comet Line escape routes use to cross from France into Spain? Why was it chosen as an escape route?" lines={2} />

      <SectionRule />

      {/* ======================================================= */}
      {/* UNIT 12 — FINAL PROJECTS */}
      {/* ======================================================= */}
      <ChapterBanner chapter="Unit 12" title="Final Projects — Choose One" />

      <EssayBox
        prompt="PROJECT A — RESEARCH ESSAY: 'Destiny's Child' is the name of the real B-17 bomber that flew with the 91st Bomb Group. Research the 91st Bomb Group using the Historical Note in the novel and outside sources. Write a 4-6 page essay covering: (1) the history of the 91st at Bassingbourn; (2) the real crew of Destiny's Child and their fates; (3) how Tricia Goyer adapted the real history for her fiction; (4) what the Historical Note reveals about the relationship between history and storytelling."
        lines={20}
      />

      <EssayBox
        prompt="PROJECT B — CREATIVE WRITING: Write a 4-6 page narrative from the point of view of baby Samuel — now grown up, age 20, living in Montana in 1964. He is looking at the photograph of himself on a pony that Rebecca received in Chapter 30. He knows his full history: his biological parents, his adoption by Eddie and Mary, Rebecca's letter, and Sister Clarence's role in saving his life. He has just decided to go to Belgium to find Rebecca. Write the scene."
        lines={20}
      />

      <EssayBox
        prompt="PROJECT C — COMPARATIVE HISTORY: Compare the role of women in World War II using two of the following: (1) Lee O'Donnelly and Mary Kelley as war correspondents; (2) Real correspondent Martha Gellhorn who landed at Normandy on D-Day; (3) Violette Szabo, British SOE agent executed in 1945; (4) Andrée de Jongh, Belgian founder of the Comet Line. Write a 4-6 page essay. Use at least 3 outside sources."
        lines={20}
      />

    </div>
  );
}