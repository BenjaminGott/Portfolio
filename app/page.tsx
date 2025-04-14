import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  ArrowRight,
  Database,
  BarChart,
  Code,
  ChevronRight,
  Phone,
  MapPin,
  Calendar,
  GraduationCap,
} from "lucide-react"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import CertificationCard from "@/components/certification-card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            Benjamin Gottrant
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              À propos
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projets
            </Link>
            <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Compétences
            </Link>
            <Link href="#education" className="text-muted-foreground hover:text-foreground transition-colors">
              Formation
            </Link>
            <Link href="#certifications" className="text-muted-foreground hover:text-foreground transition-colors">
              Certifications
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
          <Button asChild>
            <Link href="#contact">Me contacter</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-24 md:py-32 space-y-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">Data Analyste</h1>
            <p className="text-xl text-muted-foreground max-w-[700px]">
              Étudiant en informatique passionné par l'analyse de données, je transforme les données en insights
              pertinents.
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="#projects">
                  Voir mes projets <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#contact">Me contacter</Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <Card className="bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-950 dark:to-cyan-900 border-cyan-200 dark:border-cyan-800">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <Database className="h-12 w-12 text-cyan-600 dark:text-cyan-400 mb-2" />
                <h3 className="text-xl font-semibold">Analyse de Données</h3>
                <p className="text-muted-foreground">
                  Extraction, transformation et analyse de données avec R et Python
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-950 dark:to-teal-900 border-teal-200 dark:border-teal-800">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <BarChart className="h-12 w-12 text-teal-600 dark:text-teal-400 mb-2" />
                <h3 className="text-xl font-semibold">Visualisation</h3>
                <p className="text-muted-foreground">Création de visualisations interactives et dashboards</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950 dark:to-emerald-900 border-emerald-200 dark:border-emerald-800">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <Code className="h-12 w-12 text-emerald-600 dark:text-emerald-400 mb-2" />
                <h3 className="text-xl font-semibold">Développement</h3>
                <p className="text-muted-foreground">Python, R, Azure et développement web</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-muted/50">
          <div className="container py-24 md:py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/images/benjamin-photo.jpg"
                  alt="Photo de Benjamin Gottrant"
                  className="rounded-full aspect-square object-cover mx-auto shadow-lg"
                  width={400}
                  height={400}
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter">À propos de moi</h2>
                <p className="text-muted-foreground">
                  Actuellement étudiant en deuxième année d'informatique à Ynov Lyon, je recherche un stage de 6
                  semaines à partir de juin afin de préparer au mieux mon entrée en alternance d'un an à partir de
                  septembre 2025 sur un rythme de 2 semaines en entreprise et 1 semaine en cours.
                </p>
                <p className="text-muted-foreground">
                  Curieux et motivé, je suis passionné par l'analyse de données et prêt à découvrir de nouvelles
                  technologies et à relever de nouveaux défis.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <p>+33 7 67 28 67 19</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <p>benjamin.gottrant@gmail.com</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <p>Lyon - Ouest</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <p>19 ans</p>
                  </div>
                </div>
                <div className="flex gap-4 pt-4">
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://linkedin.com/in/benjamin-gottrant" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="mailto:benjamin.gottrant@gmail.com">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2" asChild>
                    <Link href="/images/benjamin_gottrant_cv_data_analyste.pdf" target="_blank" download rel="noopener noreferrer">
                      <FileText className="h-4 w-4" />
                      <span>Télécharger CV</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container py-24 md:py-32">
          <div className="space-y-6 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Mes Projets</h2>
            <p className="text-muted-foreground max-w-[700px] mx-auto">
              Découvrez une sélection de mes projets en analyse de données et développement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Analyse des 100 plus grosses cryptomonnaies"
              description="Analyse de données de cryptomonnaies de 2020 à 2023 afin d'extraire des informations clés et pertinentes. Réalisé avec Python (pandas)."
              tags={["Python", "Pandas", "Data Analysis", "Visualisation"]}
              image="/images/Cryptomonnaies.png"
            />
            <ProjectCard
              title="IA 2048"
              description="Développement d'une IA pour le jeu 2048 utilisant le reinforcement learning. Implémentation en Python avec TensorFlow."
              tags={["Python", "TensorFlow", "Reinforcement Learning", "Pygame"]}
              image="/images/2048.png"
            />
            <ProjectCard
              title="Amid'Ami - Réseau social d'événements"
              description="Réseau social d'organisation d'événements privés entre amis. Chef de projet et développeur back-end."
              tags={["Node.js", "Express", "SQL", "Project Management"]}
              image="/images/amidami.png"
            />
            {/* <ProjectCard
              title="Dashboard de visualisation de données"
              description="Création d'un tableau de bord interactif pour visualiser des données commerciales avec R Shiny."
              tags={["R", "Shiny", "Data Visualization", "Dashboard"]}
              image="/placeholder.svg?height=250&width=400"
            /> */}
            <ProjectCard
              title="ETL avec Azure Data Factory"
              description="Mise en place d'un pipeline ETL pour l'intégration de données provenant de diverses sources avec Azure Data Factory."
              tags={["Azure", "Data Factory", "ETL", "Data Integration"]}
              image="/images/azure.jpg"
            />
            <ProjectCard
              title="Analyse statistique en R"
              description="Analyse statistique approfondie d'un jeu de données avec R, incluant tests d'hypothèses et modélisation."
              tags={["R", "Statistics", "Data Analysis", "Modeling"]}
              image="/images/R.png"
            />
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
                Voir plus sur GitHub <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="bg-muted/50">
          <div className="container py-24 md:py-32">
            <div className="space-y-6 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">Compétences</h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto">
                Mon expertise technique en analyse de données et développement.
              </p>
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Hard Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="R" level={90} />
                  <SkillBadge name="Python" level={85} />
                  <SkillBadge name="TensorFlow" level={75} />
                  <SkillBadge name="NumPy" level={85} />
                  <SkillBadge name="Pandas" level={90} />
                  <SkillBadge name="Azure" level={80} />
                  <SkillBadge name="React" level={70} />
                  <SkillBadge name="CSS" level={75} />
                  <SkillBadge name="PHP" level={65} />
                  <SkillBadge name="Mathématiques" level={85} />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Travail d'équipe" level={90} />
                  <SkillBadge name="Dynamique" level={95} />
                  <SkillBadge name="Curieux" level={95} />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Langues</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Français (Natif)" level={100} />
                  <SkillBadge name="Anglais (B1)" level={70} />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Intérêts</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Musculation" level={85} />
                  <SkillBadge name="Ski" level={80} />
                  <SkillBadge name="Voyage" level={90} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="container py-24 md:py-32">
          <div className="space-y-6 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Formation</h2>
            <p className="text-muted-foreground max-w-[700px] mx-auto">Mon parcours académique.</p>
          </div>
          <div className="space-y-8 max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-6 space-y-2">
                <div className="flex justify-between items-start">
                  <div className="flex items-start gap-4">
                    <GraduationCap className="h-6 w-6 text-teal-600 dark:text-teal-400 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold">Bachelor Informatique</h3>
                      <p className="text-muted-foreground">Ynov, Lyon</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">Depuis 09.2023</p>
                  </div>
                </div>
                <p className="pt-2 pl-10">
                  Formation en informatique avec spécialisation en POO, Data et IA. Acquisition de compétences en
                  analyse de données, développement logiciel et intelligence artificielle.
                </p>
              </CardContent>
            </Card>
            <div className="relative pl-10">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-muted-foreground/20"></div>
              <div className="absolute left-0 top-0 w-0.5 h-1/2 bg-gradient-to-b from-teal-500 to-transparent"></div>
              <p className="text-muted-foreground">
                Recherche d'un stage de 6 semaines à partir de juin 2025, suivi d'une alternance d'un an à partir de
                septembre 2025 (rythme: 2 semaines en entreprise, 1 semaine en cours).
              </p>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="bg-muted/50">
          <div className="container py-24 md:py-32">
            <div className="space-y-6 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">Certifications</h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto">Mes certifications professionnelles.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <CertificationCard
                title="L'essentiel de R"
                issuer="LinkedIn Learning"
                date="2025"
                icon="chart"
                description="Maîtrise des fondamentaux du langage R pour l'analyse de données et la visualisation statistique."
              />
              <CertificationCard
                title="Les solutions ETL de Microsoft"
                issuer="LinkedIn Learning"
                date="2025"
                icon="database"
                description="Azure Data Factory et SQL Server Integration Services pour l'extraction, la transformation et le chargement de données."
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container py-24 md:py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter">Me contacter</h2>
                <p className="text-muted-foreground">
                  Vous recherchez un stagiaire ou un alternant en data analyse ? N'hésitez pas à me contacter pour
                  discuter de vos besoins.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <p>+33 7 67 28 67 19</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <p>benjamin.gottrant@gmail.com</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <p>Lyon - Ouest</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-muted-foreground" />
                    <p>linkedin.com/in/benjamin-gottrant</p>
                  </div>
                </div>
                <div className="pt-4">
                  <Button asChild>
                    <Link href="mailto:benjamin.gottrant@gmail.com">
                      Envoyer un email <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold">Formulaire de contact</h3>
                    <form name="contact" method="POST" data-netlify="true">
                      <input type="hidden" name="form-name" value="contact" />
                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-3">
                          <div className="space-y-2">
                            <label htmlFor="first-name" className="text-sm font-medium">
                              Prénom
                            </label>
                            <input
                              id="first-name"
                              name="first-name"
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              placeholder="Prénom"
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="last-name" className="text-sm font-medium">
                              Nom
                            </label>
                            <input
                              id="last-name"
                              name="last-name"
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              placeholder="Nom"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="email@example.com"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="subject" className="text-sm font-medium">
                            Sujet
                          </label>
                          <input
                            id="subject"
                            name="subject"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Sujet de votre message"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="message" className="text-sm font-medium">
                            Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Votre message..."
                          />
                        </div>
                        <Button type="submit" className="w-full">Envoyer</Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © 2025 Benjamin Gottrant. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com/in/benjamin-gottrant" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:benjamin.gottrant@gmail.com">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
