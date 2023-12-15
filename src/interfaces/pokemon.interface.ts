  interface Ability {
      ability: {
        name: string;
        url: string;
      };
      is_hidden: boolean;
      slot: number;
    }
    
    interface Form {
      name: string;
      url: string;
    }
    
    interface GameIndex {
      game_index: number;
      version: {
        name: string;
        url: string;
      };
    }
    
    interface Move {
      move: {
        name: string;
        url: string;
      };
      version_group_details: {
        move_learn_method: {
          name: string;
          url: string;
        };
        version_group: {
          name: string;
          url: string;
        };
        level_learned_at: number;
      }[];
    }
    
    interface Species {
      name: string;
      url: string;
    }
    
    interface Sprites {
      back_default: string;
      back_female: string | null;
      back_shiny: string;
      back_shiny_female: string | null;
      front_default: string;
      front_female: string | null;
      front_shiny: string;
      front_shiny_female: string | null;
      other: {
        dream_world: {
          front_default: string;
          front_female: string | null;
        };
        home: {
          front_default: string;
          front_female: string | null;
          front_shiny: string;
          front_shiny_female: string | null;
        };
        'official-artwork': {
          front_default: string;
          front_shiny: string;
        };
      };
    }
    
    interface Stat {
      base_stat: number;
      effort: number;
      stat: {
        name: string;
        url: string;
      };
    }
    
    interface Type {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }
    
    export interface Ipokemon {
      abilities: Ability[];
      base_experience: number;
      forms: Form[];
      game_indices: GameIndex[];
      height: number;
      held_items: any[]; 
      id: number;
      is_default: boolean;
      location_area_encounters: string;
      moves: Move[];
      name: string;
      order: number;
      past_abilities: Ability[]; 
      past_types: Type[]; 
      species: Species;
      sprites: Sprites;
      stats: Stat[];
      types: Type[];
      weight: number; 
    }
    export interface IResult {
      url : string
    }