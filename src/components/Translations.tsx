import {
	Table,
	TableBody,
	TableCell,
	TableHeader,
	TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"

const termins = [
	{
		id: 1,
		keyword: "Feature",
		equivalent: "Funkcionālā iezīme"
	},
	{
		id: 2,
		keyword: "Background",
		equivalent: "Konteksts"
	},
	{
		id: 3,
		keyword: "Rule",
		equivalent: "Noteikums"
	},
	{
		id: 4,
		keyword: "Scenario",
		equivalent: "Scenārijs"
	},
	{
		id: 5,
		keyword: "Scenario Outline",
		equivalent: "Scenārijs pēc parauga"
	},
	{
		id: 6,
		keyword: "Examples",
		equivalent: "Piemēri"
	},
	{
		id: 7,
		keyword: "Given",
		equivalent: "* Kad"
	},
	{
		id: 8,
		keyword: "When",
		equivalent: "* Ja"
	},
	{
		id: 9,
		keyword: "Then",
		equivalent: "* Tad"
	},
	{
		id: 10,
		keyword: "And",
		equivalent: "* Un"
	},
	{
		id: 11,
		keyword: "But",
		equivalent: "* Bet"
	},
]

export function TableComponent() {
	return (
		<div className="flex flex-col justify-center items-center">
			<h1 className="text-xl font-bold">Gherkin termini.</h1>
			<Table className="flex">
				<TableHeader>
					{termins.map((termin) => (
						<TableRow className={cn("border border-white")} key={termin.id}>
							<TableCell className="font-medium">{termin.keyword}</TableCell>
						</TableRow>
					))}
				</TableHeader>
				<TableBody>
					{termins.map((termin) => (
						<TableRow key={termin.id}>
							<TableCell className={cn("border border-white")}>{termin.equivalent}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	)
}

export function Translations() {
	return (
		<>
			<div className="flex justify-center items-center h-screen w-full">
				<div>
					<TableComponent />
				</div>
			</div>
		</>
	)
}

