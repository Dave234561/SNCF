import './App.css'
import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Button } from './components/ui/button'
import { Badge } from './components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs'
import { Alert, AlertDescription } from './components/ui/alert'
import { 
  Briefcase, 
  Train, 
  Hand, 
  Calendar,
  AlertTriangle,
  CheckCircle,
  Clock,
  Target,
  Activity,
  Users,
  Shield,
  Lightbulb,
  ArrowRight,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react'

// Import des images
import logoSNCF from './assets/logo-sncf.png'
import logoCEERRF from './assets/logo-ceerrf.jpg'
import photoPortage from './assets/photo_portage.png'
import photoMontee from './assets/photo_montee.png'
import photoGestes from './assets/photo_gestes.png'
import photoDeplacement from './assets/photo_deplacement.png'
import photoChaussures from './assets/photo_chaussures.png'
import piliersPrevention from './assets/piliers-prevention.png'

function App() {
  const [activeSection, setActiveSection] = useState('accueil')

  const sections = [
    { id: 'accueil', title: 'Accueil', icon: Shield },
    { id: 'solutions', title: 'Solutions', icon: Lightbulb },
    { id: 'portage', title: 'Portage Sécurisé', icon: Briefcase },
    { id: 'montee', title: 'Montée/Descente', icon: Train },
    { id: 'gestes', title: 'Gestes Répétitifs', icon: Hand },
    { id: 'programme', title: 'Programme Quotidien', icon: Calendar }
  ]

  const Header = () => (
    <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <img src={logoSNCF} alt="Logo SNCF" className="h-16 w-auto" />
          <img src={logoCEERRF} alt="Logo CEERRF" className="h-12 w-auto" />
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">Prévention TMS Agents de Train</h1>
          <p className="text-xl opacity-90">Guide Kinésithérapeutique • Formation Professionnelle • Solutions Préventives</p>
          <div className="mt-4 text-sm opacity-80">
            CEERRF Formation Kinésithérapeutes • 2025
          </div>
        </div>
      </div>
    </header>
  )

  const Navigation = () => (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex space-x-1 overflow-x-auto py-2">
          {sections.map((section) => {
            const Icon = section.icon
            return (
              <Button
                key={section.id}
                variant={activeSection === section.id ? "default" : "ghost"}
                onClick={() => setActiveSection(section.id)}
                className="flex items-center gap-2 whitespace-nowrap"
              >
                <Icon className="h-4 w-4" />
                {section.title}
              </Button>
            )
          })}
        </div>
      </div>
    </nav>
  )

  const AccueilSection = () => (
    <div className="space-y-8">
      <div className="text-center py-12 bg-gradient-to-b from-blue-50 to-white rounded-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Prévention des TMS chez les Agents de Train
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Un programme complet de prévention des troubles musculo-squelettiques basé sur l'analyse terrain 
          et les meilleures pratiques kinésithérapeutiques.
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="text-center">
            <CardHeader>
              <Target className="h-12 w-12 text-blue-600 mx-auto mb-2" />
              <CardTitle>Analyse Terrain</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Étude des contraintes réelles observées chez les agents SNCF
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <Activity className="h-12 w-12 text-green-600 mx-auto mb-2" />
              <CardTitle>Solutions Préventives</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Exercices et techniques adaptés aux contraintes du métier
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-2" />
              <CardTitle>Formation Kinés</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Outils pédagogiques pour les professionnels de santé
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Section des 4 Piliers de Prévention */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Les 4 Piliers de la Prévention TMS
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Découvrez où se trouvent les solutions pour une prévention efficace
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <img 
            src={piliersPrevention} 
            alt="Les 4 piliers de la prévention TMS : Connaissance, Échauffement, Étirements, Préparation physique" 
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <div className="text-3xl mb-3">💡</div>
            <h4 className="font-semibold text-gray-900 mb-2">Connaissance</h4>
            <p className="text-sm text-gray-600">
              Comprendre les facteurs de risque et les mécanismes des TMS
            </p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg border border-red-200">
            <div className="text-3xl mb-3">⚡</div>
            <h4 className="font-semibold text-gray-900 mb-2">Échauffement</h4>
            <p className="text-sm text-gray-600">
              Préparer le corps avant l'effort pour éviter les blessures
            </p>
          </div>
          <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
            <div className="text-3xl mb-3">🌀</div>
            <h4 className="font-semibold text-gray-900 mb-2">Étirements</h4>
            <p className="text-sm text-gray-600">
              Maintenir la souplesse et relâcher les tensions musculaires
            </p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <div className="text-3xl mb-3">💜</div>
            <h4 className="font-semibold text-gray-900 mb-2">Préparation physique</h4>
            <p className="text-sm text-gray-600">
              Renforcer et conditionner le corps pour les contraintes du métier
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="cursor-pointer hover:shadow-lg transition-shadow" 
              onClick={() => setActiveSection('portage')}>
          <CardHeader>
            <Briefcase className="h-8 w-8 text-blue-600 mb-2" />
            <CardTitle className="text-lg">Portage Sécurisé</CardTitle>
            <CardDescription>Techniques de portage et prévention lombaire</CardDescription>
          </CardHeader>
          <CardContent>
            <img src={photoPortage} alt="Portage valise" className="w-full h-32 object-cover rounded-md mb-2" />
            <Badge variant="destructive" className="text-xs">Charge 18-20kg</Badge>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition-shadow" 
              onClick={() => setActiveSection('montee')}>
          <CardHeader>
            <Train className="h-8 w-8 text-purple-600 mb-2" />
            <CardTitle className="text-lg">Montée/Descente</CardTitle>
            <CardDescription>Gestes protecteurs et préparation physique</CardDescription>
          </CardHeader>
          <CardContent>
            <img src={photoMontee} alt="Montée train" className="w-full h-32 object-cover rounded-md mb-2" />
            <Badge variant="outline" className="text-xs">20-30x/service</Badge>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition-shadow" 
              onClick={() => setActiveSection('gestes')}>
          <CardHeader>
            <Hand className="h-8 w-8 text-green-600 mb-2" />
            <CardTitle className="text-lg">Gestes Répétitifs</CardTitle>
            <CardDescription>Prévention TMS membres supérieurs</CardDescription>
          </CardHeader>
          <CardContent>
            <img src={photoGestes} alt="Gestes répétitifs" className="w-full h-32 object-cover rounded-md mb-2" />
            <Badge variant="secondary" className="text-xs">Cervico-brachial</Badge>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition-shadow" 
              onClick={() => setActiveSection('programme')}>
          <CardHeader>
            <Calendar className="h-8 w-8 text-red-600 mb-2" />
            <CardTitle className="text-lg">Programme Quotidien</CardTitle>
            <CardDescription>Routine complète et auto-évaluation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-1 mb-2">
              <img src={photoPortage} alt="Portage" className="w-full h-10 object-cover rounded-sm" />
              <img src={photoDeplacement} alt="Déplacement" className="w-full h-10 object-cover rounded-sm" />
              <img src={photoMontee} alt="Montée" className="w-full h-10 object-cover rounded-sm" />
            </div>
            <Badge className="text-xs">Planning 24h</Badge>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const PortageSection = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
          <Briefcase className="h-8 w-8 text-blue-600" />
          Portage Sécurisé de la Valise
        </h2>
        <p className="text-lg text-gray-600">Prévention TMS • Techniques et Exercices • Guide Kinésithérapeute</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Situation Observée
            </CardTitle>
          </CardHeader>
          <CardContent>
            <img src={photoPortage} alt="Agent avec valise réglementaire" 
                 className="w-full h-64 object-cover rounded-lg mb-4" />
            <p className="text-sm text-gray-600 italic text-center">
              Situation observée : portage asymétrique avec charges multiples
            </p>
          </CardContent>
        </Card>

        <Card className="bg-red-50 border-red-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-700">
              <AlertTriangle className="h-5 w-5" />
              Facteurs de Risque Identifiés
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert className="border-red-200">
              <Target className="h-4 w-4" />
              <AlertDescription>
                <strong>Rachis lombaire :</strong> Compression L4-L5, inclinaison latérale
              </AlertDescription>
            </Alert>
            <Alert className="border-red-200">
              <Activity className="h-4 w-4" />
              <AlertDescription>
                <strong>Asymétrie :</strong> Carré des lombes en tension permanente
              </AlertDescription>
            </Alert>
            <Alert className="border-red-200">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Charge :</strong> 18-20kg pendant 8-12h/jour
                <Badge variant="destructive" className="ml-2">CRITIQUE</Badge>
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-green-50 border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-700">
              <CheckCircle className="h-5 w-5" />
              Solutions Préventives
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
              <RotateCcw className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <strong>Alternance :</strong> Changer de côté toutes les 30 minutes
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
              <Activity className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <strong>Répartition :</strong> Équilibrer les charges bilatéralement
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
              <Pause className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <strong>Pauses :</strong> Déposer la valise régulièrement
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-700">
              <Activity className="h-5 w-5" />
              Exercices Spécifiques
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
              <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                🌅
              </div>
              <div>
                <strong>Avant :</strong> Échauffement lombaire et épaules
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
              <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                ⚡
              </div>
              <div>
                <strong>Pendant :</strong> Étirements latéraux du tronc
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
              <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                🌙
              </div>
              <div>
                <strong>Après :</strong> Décompression vertébrale
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const MonteeSection = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
          <Train className="h-8 w-8 text-purple-600" />
          Montée/Descente du Train
        </h2>
        <p className="text-lg text-gray-600">Gestes Protecteurs • Préparation Physique • Sécurité</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Situation Critique</CardTitle>
          </CardHeader>
          <CardContent>
            <img src={photoMontee} alt="Montée train avec charges" 
                 className="w-full h-64 object-cover rounded-lg mb-4" />
            <p className="text-sm text-gray-600 italic text-center">
              Flexion lombaire + charge + instabilité
            </p>
          </CardContent>
        </Card>

        <Card className="bg-red-50 border-red-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-700">
              <AlertTriangle className="h-5 w-5" />
              Risques Biomécaniques
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert className="border-red-200">
              <AlertDescription>
                <strong>Flexion :</strong> Angle lombaire &gt; 30°
                <Badge variant="destructive" className="ml-2">DANGER</Badge>
              </AlertDescription>
            </Alert>
            <Alert className="border-red-200">
              <AlertDescription>
                <strong>Déséquilibre :</strong> Instabilité avec charges
              </AlertDescription>
            </Alert>
            <Alert className="border-red-200">
              <AlertDescription>
                <strong>Fréquence :</strong> 20-30 montées/service
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-green-50 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-700">
            <CheckCircle className="h-5 w-5" />
            Technique Sécurisée
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-3">
                1
              </div>
              <h4 className="font-semibold mb-2">Préparation</h4>
              <p className="text-sm text-gray-600">Poser la valise avant de monter</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-3">
                2
              </div>
              <h4 className="font-semibold mb-2">Appui</h4>
              <p className="text-sm text-gray-600">Utiliser les mains courantes</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-3">
                3
              </div>
              <h4 className="font-semibold mb-2">Posture</h4>
              <p className="text-sm text-gray-600">Fléchir genoux, dos droit</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const GestesSection = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
          <Hand className="h-8 w-8 text-green-600" />
          Gestes Répétitifs - Contrôle
        </h2>
        <p className="text-lg text-gray-600">Prévention TMS Membres Supérieurs • Pauses Actives</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Gestes de Contrôle</CardTitle>
          </CardHeader>
          <CardContent>
            <img src={photoGestes} alt="Gestes répétitifs de contrôle" 
                 className="w-full h-64 object-cover rounded-lg mb-4" />
            <p className="text-sm text-gray-600 italic text-center">
              Gestes de contrôle répétitifs - Sollicitation cervico-brachiale
            </p>
          </CardContent>
        </Card>

        <Card className="bg-yellow-50 border-yellow-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-700">
              <Target className="h-5 w-5" />
              Zones Anatomiques Sollicitées
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 bg-white rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-semibold text-yellow-800">Cervicales</h4>
              <p className="text-sm text-gray-600">Flexion prolongée, tensions trapèzes</p>
            </div>
            <div className="p-3 bg-white rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-semibold text-yellow-800">Poignets</h4>
              <p className="text-sm text-gray-600">Prono-supination, douleurs TMC</p>
            </div>
            <div className="p-3 bg-white rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-semibold text-yellow-800">Avant-bras</h4>
              <p className="text-sm text-gray-600">Fatigue fléchisseurs, crampes</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-700">
              <Clock className="h-5 w-5" />
              Pauses Actives
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4 p-3 bg-white rounded-lg border-l-4 border-blue-500">
              <Badge className="bg-blue-600">30 min</Badge>
              <div>
                <h4 className="font-semibold">Étirement Poignets</h4>
                <p className="text-sm text-gray-600">Flexion/extension 10x</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 bg-white rounded-lg border-l-4 border-blue-500">
              <Badge className="bg-blue-600">1 heure</Badge>
              <div>
                <h4 className="font-semibold">Rotation Cervicales</h4>
                <p className="text-sm text-gray-600">Mobilisation douce</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-green-50 border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-700">
              <Activity className="h-5 w-5" />
              Exercices Préventifs
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
              <RotateCcw className="h-5 w-5 text-green-600 mt-0.5" />
              <div>Alternance main dominante</div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
              <Hand className="h-5 w-5 text-green-600 mt-0.5" />
              <div>Automassage avant-bras</div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
              <Activity className="h-5 w-5 text-green-600 mt-0.5" />
              <div>Relaxation cervicales</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const ProgrammeSection = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
          <Calendar className="h-8 w-8 text-red-600" />
          Programme Quotidien
        </h2>
        <p className="text-lg text-gray-600">Routine Complète • Auto-évaluation • Prévention Active</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Situations Terrain Observées</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <img src={photoPortage} alt="Portage asymétrique" 
                   className="w-full h-32 object-cover rounded-lg mb-2" />
              <p className="text-sm text-gray-600">Portage asymétrique</p>
            </div>
            <div className="text-center">
              <img src={photoDeplacement} alt="Traction valise" 
                   className="w-full h-32 object-cover rounded-lg mb-2" />
              <p className="text-sm text-gray-600">Traction valise</p>
            </div>
            <div className="text-center">
              <img src={photoMontee} alt="Montée avec charges" 
                   className="w-full h-32 object-cover rounded-lg mb-2" />
              <p className="text-sm text-gray-600">Montée avec charges</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-red-600" />
            Planning Type d'une Journée
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-red-500">
            <Badge className="bg-red-600">Avant</Badge>
            <div className="flex-1">
              <h4 className="font-semibold">Préparation Physique</h4>
              <p className="text-sm text-gray-600">Échauffement • Mobilisation • 5 min</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-red-500">
            <Badge className="bg-red-600">Pendant</Badge>
            <div className="flex-1">
              <h4 className="font-semibold">Pauses Actives</h4>
              <p className="text-sm text-gray-600">Étirements • Alternance • Toutes les 30 min</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-red-500">
            <Badge className="bg-red-600">Après</Badge>
            <div className="flex-1">
              <h4 className="font-semibold">Récupération</h4>
              <p className="text-sm text-gray-600">Décompression • Relaxation • 10 min</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-700">
              🌅 Avant
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 p-2 bg-white rounded text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Rotations cervicales
              </li>
              <li className="flex items-center gap-2 p-2 bg-white rounded text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Mobilisation épaules
              </li>
              <li className="flex items-center gap-2 p-2 bg-white rounded text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Flexion poignets
              </li>
              <li className="flex items-center gap-2 p-2 bg-white rounded text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Squats préparatoires
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-green-50 border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-700">
              ⚡ Pendant
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 p-2 bg-white rounded text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Étirement cervicales
              </li>
              <li className="flex items-center gap-2 p-2 bg-white rounded text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Alternance portage
              </li>
              <li className="flex items-center gap-2 p-2 bg-white rounded text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Pauses décharge
              </li>
              <li className="flex items-center gap-2 p-2 bg-white rounded text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Mobilisation poignets
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-yellow-50 border-yellow-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-700">
              🌙 Après
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 p-2 bg-white rounded text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Décompression lombaire
              </li>
              <li className="flex items-center gap-2 p-2 bg-white rounded text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Étirements complets
              </li>
              <li className="flex items-center gap-2 p-2 bg-white rounded text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Automassage
              </li>
              <li className="flex items-center gap-2 p-2 bg-white rounded text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Relaxation
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const SolutionsSection = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
          <Lightbulb className="h-8 w-8 text-yellow-500" />
          Solutions & Bonnes Pratiques TMS
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Recommandations concrètes basées sur les meilleures pratiques pour prévenir efficacement les troubles musculo-squelettiques
        </p>
        
        {/* Iconographie des 4 piliers */}
        <div className="flex justify-center items-center gap-16 mb-8 py-6 bg-white rounded-lg shadow-sm">
          <div className="text-center">
            <div className="text-6xl mb-2">💡</div>
            <p className="text-sm font-medium text-gray-600">Connaissance</p>
          </div>
          <div className="text-center">
            <div className="text-6xl mb-2">⚡</div>
            <p className="text-sm font-medium text-gray-600">Échauffement</p>
          </div>
          <div className="text-center">
            <div className="text-6xl mb-2">🌀</div>
            <p className="text-sm font-medium text-gray-600">Étirements</p>
          </div>
          <div className="text-center">
            <div className="text-6xl mb-2">💜</div>
            <p className="text-sm font-medium text-gray-600">Préparation physique</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Connaissance */}
        <Card className="bg-yellow-50 border-yellow-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-700">
              💡 Connaissance
            </CardTitle>
            <CardDescription>Facteurs de risque à identifier</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Alert className="border-yellow-300 bg-yellow-100">
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
              <AlertDescription className="text-sm">
                <strong>Répétitivité des gestes</strong><br/>
                Mouvements répétés sollicitant les mêmes structures
              </AlertDescription>
            </Alert>
            <Alert className="border-yellow-300 bg-yellow-100">
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
              <AlertDescription className="text-sm">
                <strong>Maintien prolongé d'une posture</strong><br/>
                Positions statiques contraignantes
              </AlertDescription>
            </Alert>
            <Alert className="border-yellow-300 bg-yellow-100">
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
              <AlertDescription className="text-sm">
                <strong>Efforts excessifs</strong><br/>
                Charges importantes ou mal réparties
              </AlertDescription>
            </Alert>
            <Alert className="border-yellow-300 bg-yellow-100">
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
              <AlertDescription className="text-sm">
                <strong>Amplitudes articulaires extrêmes</strong><br/>
                Mouvements en fin de course articulaire
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Échauffement */}
        <Card className="bg-red-50 border-red-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-700">
              ⚡ Échauffement
            </CardTitle>
            <CardDescription>Préparation efficace avant l'effort</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 bg-white rounded border border-red-200">
              <h4 className="font-semibold text-sm mb-2">Mouvements dynamiques</h4>
              <p className="text-xs text-gray-600">Rotations épaules, flexions genoux pour activer la circulation</p>
            </div>
            <div className="p-3 bg-white rounded border border-red-200">
              <h4 className="font-semibold text-sm mb-2">Zones à risque ciblées</h4>
              <p className="text-xs text-gray-600">Épaules, dos, genoux selon l'activité prévue</p>
            </div>
            <div className="p-3 bg-white rounded border border-red-200">
              <h4 className="font-semibold text-sm mb-2">Intensité progressive</h4>
              <p className="text-xs text-gray-600">Mouvements légers puis augmentation graduelle</p>
            </div>
            <div className="p-3 bg-white rounded border border-red-200">
              <h4 className="font-semibold text-sm mb-2">Mobilisation articulaire</h4>
              <p className="text-xs text-gray-600">Rotations poignets, chevilles, cou</p>
            </div>
            <Alert className="border-red-300 bg-red-100">
              <Clock className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-sm">
                <strong>Durée :</strong> 5 à 10 minutes selon l'intensité
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Étirements */}
        <Card className="bg-teal-50 border-teal-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-teal-700">
              🌀 Étirements
            </CardTitle>
            <CardDescription>Techniques d'étirement sécurisées</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 bg-white rounded border border-teal-200">
              <h4 className="font-semibold text-sm mb-2">Échauffement préalable</h4>
              <p className="text-xs text-gray-600">Préparer les muscles avec mouvements légers</p>
            </div>
            <div className="p-3 bg-white rounded border border-teal-200">
              <h4 className="font-semibold text-sm mb-2">Progression douce</h4>
              <p className="text-xs text-gray-600">Ne jamais forcer, pas de douleur</p>
            </div>
            <div className="p-3 bg-white rounded border border-teal-200">
              <h4 className="font-semibold text-sm mb-2">Maintien optimal</h4>
              <p className="text-xs text-gray-600">20 à 30 secondes par position</p>
            </div>
            <div className="p-3 bg-white rounded border border-teal-200">
              <h4 className="font-semibold text-sm mb-2">Respiration contrôlée</h4>
              <p className="text-xs text-gray-600">Favoriser la détente musculaire</p>
            </div>
            <div className="p-3 bg-white rounded border border-teal-200">
              <h4 className="font-semibold text-sm mb-2">Zones prioritaires</h4>
              <p className="text-xs text-gray-600">Dos, épaules, poignets, jambes</p>
            </div>
            <Alert className="border-teal-300 bg-teal-100">
              <RotateCcw className="h-4 w-4 text-teal-600" />
              <AlertDescription className="text-sm">
                <strong>Fréquence :</strong> Plusieurs fois par jour, surtout après tâches intenses
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Renforcement musculaire */}
        <Card className="bg-purple-50 border-purple-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-700">
              💜 Préparation physique
            </CardTitle>
            <CardDescription>Renforcement musculaire préventif</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 bg-white rounded border border-purple-200">
              <h4 className="font-semibold text-sm mb-2">Muscles sollicités</h4>
              <p className="text-xs text-gray-600">Dos, épaules, jambes, mains selon l'activité</p>
            </div>
            <div className="p-3 bg-white rounded border border-purple-200">
              <h4 className="font-semibold text-sm mb-2">Exercices de base</h4>
              <p className="text-xs text-gray-600">Squats, pompes, planches fonctionnels</p>
            </div>
            <div className="p-3 bg-white rounded border border-purple-200">
              <h4 className="font-semibold text-sm mb-2">Équilibre musculaire</h4>
              <p className="text-xs text-gray-600">Muscles antagonistes (abdos/lombaires)</p>
            </div>
            <div className="p-3 bg-white rounded border border-purple-200">
              <h4 className="font-semibold text-sm mb-2">Posture correcte</h4>
              <p className="text-xs text-gray-600">Éviter tensions inutiles pendant exercices</p>
            </div>
            <Alert className="border-purple-300 bg-purple-100">
              <Target className="h-4 w-4 text-purple-600" />
              <AlertDescription className="text-sm">
                <strong>Programme :</strong> 3-4 séries de 10 répétitions, 2-3x/semaine
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>

      {/* Section récapitulative */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-center text-2xl text-blue-900">
            🎯 Mise en Application Pratique
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="font-semibold mb-2">Formation</h3>
              <p className="text-sm text-gray-600">
                Sensibiliser les agents aux facteurs de risque et aux bonnes pratiques
              </p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-3xl mb-3">⏰</div>
              <h3 className="font-semibold mb-2">Planification</h3>
              <p className="text-sm text-gray-600">
                Intégrer échauffement, étirements et renforcement dans la routine quotidienne
              </p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-semibold mb-2">Suivi</h3>
              <p className="text-sm text-gray-600">
                Évaluer régulièrement l'efficacité et adapter les exercices selon les besoins
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderContent = () => {
    switch (activeSection) {
      case 'accueil':
        return <AccueilSection />
      case 'solutions':
        return <SolutionsSection />
      case 'portage':
        return <PortageSection />
      case 'montee':
        return <MonteeSection />
      case 'gestes':
        return <GestesSection />
      case 'programme':
        return <ProgrammeSection />
      default:
        return <AccueilSection />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 py-8">
        {renderContent()}
      </main>
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-8 mb-4">
            <img src={logoSNCF} alt="Logo SNCF" className="h-12 w-auto opacity-80" />
            <img src={logoCEERRF} alt="Logo CEERRF" className="h-8 w-auto opacity-80" />
          </div>
          <p className="text-lg font-semibold mb-2">PRÉVENTION TMS AGENTS DE TRAIN</p>
          <p className="text-sm opacity-80">CEERRF Formation Kinésithérapeutes • 2025</p>
          <p className="text-xs opacity-60 mt-4">
            Site développé dans le cadre de la formation professionnelle des kinésithérapeutes 
            pour la prévention des troubles musculo-squelettiques chez les agents SNCF
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

