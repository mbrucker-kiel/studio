import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { teamMembers } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight md:text-4xl">
          Über RAUM5
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-muted-foreground">
          RAUM5 bündelt Data-Science-Expertise, Softwareentwicklung und
          Business-Verständnis, um nachhaltige Werte aus Daten zu schaffen. Wir
          sind mehr als nur Berater – wir sind Ihre Partner in der digitalen
          Transformation.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {teamMembers.map((member) => {
            const memberImage = PlaceHolderImages.find(
              (img) => img.id === member.imageId
            );
            return (
              <Card
                key={member.name}
                className="overflow-hidden bg-card/50 transition-all hover:bg-card"
              >
                <CardHeader className="flex-row items-center gap-4">
                  <Avatar className="relative h-20 w-20">
                    {memberImage && (
                      <Image
                        src={memberImage.imageUrl}
                        alt={`Profilbild von ${member.name}`}
                        fill
                        data-ai-hint={memberImage.imageHint}
                        className="object-cover"
                        style={{
                          objectPosition:
                            member.name === 'Frederik Brinkmann'
                              ? 'center 25%'
                              : 'center',
                        }}
                      />
                    )}
                    <AvatarFallback>
                      {member.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription className="text-primary">
                      {member.role}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">
                    {member.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
