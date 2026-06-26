import { Project } from "@/types";
import {
  PORTFOLIO_FOODFOREST,
  PORTFOLIO_POLLINATOR,
  PORTFOLIO_HABITAT,
  PORTFOLIO_HOMESTEAD,
} from "./images";

export const projects: Project[] = [
  {
    slug: "food-forest",
    name: "The Food Forest",
    location: "Santa Cruz, CA",
    year: 2023,
    description:
      "A layered, edible landscape designed around fruit trees, berry shrubs, and perennial herbs — built to mimic a forest ecosystem while producing food nearly year-round.",
    image: PORTFOLIO_FOODFOREST,
    challenge:
      "A bare backyard lawn with no food production, no habitat value, and high water use.",
    approach:
      "A layered food forest design using fruit trees, berry shrubs, nitrogen-fixing support plants, and perennial herbs — built to mimic the structure of a natural forest while producing food nearly year-round.",
    narrative: `The clients wanted more from their yard than a lawn that needed mowing every week. They wanted food. Brett's response was to design a food forest — layering fruit trees, berry shrubs, and perennial herbs the way a natural forest layers its canopy, understory, and ground cover.

Three years in, the garden produces apples, figs, berries, and fresh herbs nearly year-round, with a fraction of the water and maintenance a lawn would require. It's also become a haven for birds and pollinators — proof that a productive garden and a beautiful one can be exactly the same thing.`,
    keystonePlants: [
      {
        name: "Ceanothus (California Lilac)",
        description: "Early-season pollen source for bees",
      },
      {
        name: "Salvia clevelandii (Cleveland Sage)",
        description: "Supports native bees through summer",
      },
      {
        name: "Arctostaphylos 'Howard McMinn' (Manzanita)",
        description:
          "Winter flowers feed bees and hummingbirds, berries sustain birds",
      },
      {
        name: "Comfrey",
        description: "Fast-growing mulch source and pollinator magnet",
      },
      {
        name: "Dwarf fruit trees (apple, fig, citrus)",
        description: "The productive canopy layer",
      },
    ],
    nextSlug: "pollinator-garden",
  },
  {
    slug: "pollinator-garden",
    name: "The Pollinator Garden",
    location: "Soquel, CA",
    year: 2022,
    description:
      "A keystone native planting designed to support bees, butterflies, and hummingbirds from early spring through late fall — proof that habitat and beauty can be the same thing.",
    image: PORTFOLIO_POLLINATOR,
    challenge:
      "A conventional ornamental garden that supported almost no wildlife despite looking maintained.",
    approach:
      "Replacing ornamentals with keystone native species selected for maximum pollinator support across all seasons.",
    narrative: `The Pollinator Garden in Soquel was designed around one principle: every plant earns its place by feeding something. The result is a garden that blooms in sequence from February through November, always offering something to the bees, butterflies, and hummingbirds that visit daily.

What looks like a beautiful ornamental garden is actually a precision ecosystem — each species chosen not for looks alone, but for the specific insects and birds it supports at specific times of year.`,
    keystonePlants: [
      { name: "Salvia apiana (White Sage)", description: "Summer bee magnet" },
      {
        name: "Epilobium canum (California Fuchsia)",
        description: "Fall hummingbird fuel",
      },
      {
        name: "Eriogonum fasciculatum (Buckwheat)",
        description: "Late-season butterfly host plant",
      },
    ],
    nextSlug: "habitat-restoration",
  },
  {
    slug: "habitat-restoration",
    name: "Habitat Restoration",
    location: "Aptos, CA",
    year: 2021,
    description:
      "A degraded hillside returned to native habitat — invasive removal, erosion control, and a keystone plant palette that now supports birds, pollinators, and healthy soil life.",
    image: PORTFOLIO_HABITAT,
    challenge:
      "A steep hillside overtaken by invasive species with significant erosion and no wildlife habitat value.",
    approach:
      "Systematic invasive removal followed by phased native replanting using deep-rooted erosion-control species and keystone habitat plants.",
    narrative: `The hillside in Aptos had been written off for years — too steep, too overgrown, too far gone. Brett's approach was methodical: clear the invasives in sections, stabilize the slope immediately with deep-rooted natives, and let the ecosystem rebuild itself with minimal intervention.

Three years after planting, the hillside supports nesting birds, a visible pollinator population, and soil life that has measurably improved. The erosion that was carving channels down the slope has stopped.`,
    keystonePlants: [
      {
        name: "Baccharis pilularis (Coyote Brush)",
        description: "Erosion anchor and insect powerhouse",
      },
      {
        name: "Heteromeles arbutifolia (Toyon)",
        description: "Bird habitat and winter food source",
      },
      {
        name: "Nassella pulchra (Purple Needlegrass)",
        description: "Deep-rooted slope stabilizer",
      },
    ],
    nextSlug: "homestead",
  },
  {
    slug: "homestead",
    name: "The Homestead Garden",
    location: "Capitola, CA",
    year: 2022,
    description:
      "A productive backyard homestead — chickens, fruit trees, and a kitchen garden designed to work together as one low-maintenance system.",
    image: PORTFOLIO_HOMESTEAD,
    challenge:
      "A standard suburban backyard being converted to a productive homestead without sacrificing beauty or becoming high-maintenance.",
    approach:
      "Integrated design connecting chicken foraging areas, fruit tree guild plantings, and a kitchen garden into a single low-input system.",
    narrative: `The Capitola homestead project was about making a backyard work as hard as the family that tends it. The chickens fertilize the fruit trees. The fruit trees shade the kitchen garden in summer. The kitchen garden scraps go back to the chickens. Nothing in this design is accidental.

The result is a backyard that produces eggs, fruit, and vegetables year-round — and requires less maintenance than the lawn it replaced.`,
    keystonePlants: [
      {
        name: "Comfrey",
        description: "Dynamic accumulator and chicken forage",
      },
      {
        name: "Dwarf apple and pear",
        description: "Canopy layer with companion understory plantings",
      },
      {
        name: "Yarrow (Achillea)",
        description: "Ground cover, pollinator plant, and medicinal herb",
      },
    ],
    nextSlug: "food-forest",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string): Project | undefined {
  const current = getProject(slug);
  if (!current?.nextSlug) return undefined;
  return getProject(current.nextSlug);
}
