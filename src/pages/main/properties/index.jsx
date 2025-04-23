import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MapPin, ChevronDown } from 'lucide-react';
import Filter from '@/assets/svg/filter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

function Properties() {
  return (
    <div className='flex items-center gap-4 p-4'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="rounded-full px-4  py-5 flex items-center gap-2">
            Home Type <ChevronDown className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-2">
          <DropdownMenuItem>Apartment</DropdownMenuItem>
          <DropdownMenuItem>Villa</DropdownMenuItem>
          <DropdownMenuItem>Studio</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="flex items-center flex-1 bg-white text-[#8A8787] border-2 rounded-full pl-4 pr-2">
        <MapPin className="w-4 h-4 text-[#8A8787]" />
        <Input
          type="text"
          placeholder="Location"
          className="flex-1 border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground text-sm bg-transparent"
        />
      </div>

      <Button className="rounded-full bg-transparent py-5  text-[#8A8787] hover:text-white border border-[#E9E9E9] px-4 flex items-center gap-2">
        <Filter className="w-4 h-4 text-[#8A8787]" />
        All Filters
      </Button>
    </div>
  );
}

export default Properties;
