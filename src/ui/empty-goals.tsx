import logo from '../assets/logo-in-orbit.svg'
import letsStart from '../assets/lets-start-ilustration.svg'
import { Plus, X } from 'lucide-react'
import { Button } from '../ui/button'
import { DialogTrigger } from './dialog'

export function EmptyGoals(){
    return (
        <div className="h-screen flex flex-col items-center justify-center gap-8">
        <img src={logo} alt="in.orbit" />
        <img src={letsStart} alt="in.orbit" />
        <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
          Voce ainda não cadastrou nenhuma meta, que tal cadastrar uma agora
          mesmo?
        </p>

        <DialogTrigger asChild>
          <Button>
            <Plus className="size-4" />
            Cadastrar Meta
          </Button>
        </DialogTrigger>
      </div>
    )
}