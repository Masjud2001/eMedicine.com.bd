import { CheckCircle2, ShieldCheck, Truck, Headphones, Award } from "lucide-react";

const badges = [
    {
        icon: <ShieldCheck className="text-primary-500" size={28} />,
        title: "100% Authentic",
        subtitle: "Source from manufacturers",
        bg: "bg-primary-50",
    },
    {
        icon: <Truck className="text-secondary-500" size={28} />,
        title: "Fast Delivery",
        subtitle: "Doorstep delivery in BD",
        bg: "bg-secondary-50",
    },
    {
        icon: <Headphones className="text-emerald-500" size={28} />,
        title: "Pharmacist Help",
        subtitle: "Expert advice anytime",
        bg: "bg-emerald-50",
    },
    {
        icon: <Award className="text-amber-500" size={28} />,
        title: "Licensed Provider",
        subtitle: "Verified by DGDA",
        bg: "bg-amber-50",
    },
];

const TrustBadge = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {badges.map((badge, index) => (
                <div
                    key={index}
                    className="group flex items-center gap-5 p-6 bg-white rounded-2xl border border-slate-100/80 shadow-soft hover:shadow-medium hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 animate-in fade-in slide-in-from-bottom-2 fill-mode-both"
                    style={{ animationDelay: `${index * 150}ms` }}
                >
                    <div className={`p-4 rounded-xl ${badge.bg} group-hover:scale-110 transition-transform duration-500`}>
                        {badge.icon}
                    </div>
                    <div className="space-y-1">
                        <h4 className="font-bold text-slate-900 group-hover:text-primary-600 transition-colors">
                            {badge.title}
                        </h4>
                        <p className="text-xs text-slate-500 font-medium leading-relaxed">
                            {badge.subtitle}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export { TrustBadge };
