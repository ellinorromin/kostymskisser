Hej, Maria & Iris!

Här är vårt repo, en fork-ad och omdöpt kopia av Mikaels repo med brevet till Strindberg från hans dotter. Jag har låtit de strindberg-relaterade filerna ligga kvar, inklusive de vi kommer radera, så ni kan klicka runt lite och se hur det ser ut, vilka filer som ligger i vilken mapp osv. I img-mappen i collection-mappen ska tif-filerna ligga, och i img-mappen i docs>assets kommer jpg-filerna som vi använder i HTML:en ligga.

Jag planerar att leka runt lite med HTML:en och CSS:en denna vecka eller veckan därpå, ta en titt på Wouts templates och se om jag kan få till en snygg design till vår sida osv. Det är dock en ganska uppbokad vecka för min del (pga på plats-vecka för Forskningsmetoder-kursen och jobb övriga dagar) så jag utlovar inga storverk i nuläget. Men nu har vi i alla fall ett repo att jobba i!

/Ellinor, 20 April

MIKAELS URSPRUNGLIGA TEXT I README:N

# TEI som wrapper för bildsamlingar

Baserad på
🚀[Wout's SSLIS templates](https://github.com/SSLIS/DCHM-template)🚀

TEI-filen (i mappen `collextion/tei`) exemplifierar hur TEI (eller mer specifikt teiCorpus) kan användas för att organisera en bildsamling där objekten innehåller ingen text alls, eller där transkription bedöms överflödig.

Poängen är att såväl bildfiler som TEI-filen kan bära på väsentlig metadata och möjliggöra en flexiblare och säkrare organisation av en bildsamling.

_Förfarandet är endast ett förslag_ och bygger på att du kan redigera och exportera metadata i bildfilerna, företrädesvis med det kommandoradsbaserade **exiftool**, för vilket det finns guidelines på annan plats.

## Tillämpning för publicering

Kanske är inte ditt projekt avsett för publicering, men om så ändå är fallet så behöver du tänka på en hel del filhantering och filstrukturer.

Använd `docs/assets/imagecollection.xsl` som transformationsscenario (oxygens terminologi), tei/xml-filen som input och valfri html-fil som output. Observera i vilka mappar filerna finns och var du vill ha html-filen, vanligen i roten för mappen docs.

Om du vill kan du ta den resulterande html-filen och göra en kopia som du döper till `index.html och skapar en "första sida" med en presentation av samlingen direkt med html-redigering för publicering.

## Anpassning av transformationen

`
Fr a kan det uppstå behov av att extrahera särskilda metadata från TEI-filens xenodata till html-derivaten, utöver den som exemplet ger, men även andra önskemål om mindre anpassningar kan uppstå. Ta då kontakt med Mikael om du behöver hjälp.

## Rekommenderad filstruktur

Om du avser att transformera din wrapper till html med hjälp av `docs/assets/imagecollection.xsl` är det enklast om du speglar filstrukturen exakt så som den är beskaffad i den här templaten. Du gör klokast i att klona den som helhet och därefter spegla repositoriet på din lokala disk med hjälp av Github desktop.
