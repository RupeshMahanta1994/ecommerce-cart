import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

function ProfileAvatar({ avatarSize }: { avatarSize: string }) {
    return (
        <Avatar className={`size-${avatarSize}`}>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}

export default ProfileAvatar
