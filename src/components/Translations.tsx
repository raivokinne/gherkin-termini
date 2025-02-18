"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const terms = [
	{ id: 1, keyword: "Feature", equivalent: "Funkcionālā iezīme" },
	{ id: 2, keyword: "Background", equivalent: "Konteksts" },
	{ id: 3, keyword: "Rule", equivalent: "Noteikums" },
	{ id: 4, keyword: "Scenario", equivalent: "Scenārijs" },
	{ id: 5, keyword: "Scenario Outline", equivalent: "Scenārijs pēc parauga" },
	{ id: 6, keyword: "Examples", equivalent: "Piemēri" },
	{ id: 7, keyword: "Given", equivalent: "* Kad" },
	{ id: 8, keyword: "When", equivalent: "* Ja" },
	{ id: 9, keyword: "Then", equivalent: "* Tad" },
	{ id: 10, keyword: "And", equivalent: "* Un" },
	{ id: 11, keyword: "But", equivalent: "* Bet" },
	{ id: 12, keyword: "Or", equivalent: "* Vai" },
]

const faqItems = [
	{
		question: "Kas un kāpēc ir funkcionālā iezīme?",
		answer:
			"Funkcionālā iezīme ir konkrēta sistēmas funkcionalitāte vai raksturlielums, kas sniedz vērtību lietotājam. Tā tiek izmantota, lai strukturētu un organizētu programmatūras prasības, padarot tās vieglāk saprotamas un testējamas.",
	},
	{
		question: "Kādā formātā veidot lietotājstāstus (angļu v. User Story)?",
		answer:
			"Lietotājstāstus parasti veido šādā formātā: 'Kā [lietotāja loma], es vēlos [mērķis/vēlme], lai [ieguvums]'. Piemēram: 'Kā reģistrēts lietotājs, es vēlos saglabāt savu iepirkumu grozu, lai varētu turpināt iepirkties vēlāk.'",
	},
	{
		question: "Kā veidot scenārijus?",
		answer:
			"Scenāriji tiek veidoti, izmantojot Kad-Ja-Tad struktūru. 'Kad' apraksta sākotnējos nosacījumus, 'Ja' apraksta darbību, kas tiek veikta, un 'Tad' apraksta sagaidāmo rezultātu. Piemēram: Kad esmu pieteicies sistēmā, Ja es noklikšķinu uz 'Izrakstīties' pogas, Tad man jābūt atteiktam no sistēmas.",
	},
	{
		question: "Kā Rubika kubs ļauj skatīties uz funkcionālajām iezīmēm?",
		answer:
			"Rubika kuba metafora palīdz vizualizēt dažādas funkcionālās iezīmes perspektīvas. Tāpat kā kubam ir sešas puses, funkcionālo iezīmi var aplūkot no dažādiem skatpunktiem: lietotāja, izstrādātāja, biznesa u.c. Tas palīdz nodrošināt visaptverošu pieeju prasību definēšanā un testēšanā.",
	},
	{
		question: "Kas ir veiksmīgā iznākuma scenārijs (angļu v. Happy Path Scenario)?",
		answer:
			"Veiksmīgā iznākuma scenārijs ir testēšanas scenārijs, kas apraksta ideālo vai paredzēto sistēmas darbības plūsmu bez kļūdām vai izņēmumiem. Tas parāda, kā sistēmai vajadzētu darboties normālos apstākļos, kad lietotājs veic visas darbības pareizi un sistēma reaģē, kā paredzēts.",
	},
]

function GherkinTerms() {
	const [searchTerm, setSearchTerm] = useState("")

	const filteredTerms = terms.filter(
		(term) =>
			term.keyword.toLowerCase().includes(searchTerm.toLowerCase()) ||
			term.equivalent.toLowerCase().includes(searchTerm.toLowerCase()),
	)

	return (
		<div className="container mx-auto py-8 px-4">
			<Card className="w-full max-w-4xl mx-auto mb-8">
				<CardHeader>
					<CardTitle className="text-2xl font-bold text-center mb-4">Gherkin termini</CardTitle>
					<div className="relative">
						<Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
						<Input
							type="text"
							placeholder="Meklēt terminus..."
							className="pl-8"
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
					</div>
				</CardHeader>
				<CardContent>
					<div className="overflow-x-auto">
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead className="w-1/2">Keyword</TableHead>
									<TableHead className="w-1/2">Equivalent</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{filteredTerms.map((term) => (
									<TableRow key={term.id}>
										<TableCell className="font-medium">{term.keyword}</TableCell>
										<TableCell>{term.equivalent}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>
				</CardContent>
			</Card>

			<Card className="w-full max-w-4xl mx-auto">
				<CardHeader>
					<CardTitle className="text-2xl font-bold text-center mb-4">Biežāk uzdotie jautājumi</CardTitle>
				</CardHeader>
				<CardContent>
					<Accordion type="single" collapsible className="w-full">
						{faqItems.map((item, index) => (
							<AccordionItem value={`item-${index}`} key={index}>
								<AccordionTrigger>{item.question}</AccordionTrigger>
								<AccordionContent>{item.answer}</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</CardContent>
			</Card>
		</div>
	)
}

export function Translations() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center py-12">
			<GherkinTerms />
		</div>
	)
}


