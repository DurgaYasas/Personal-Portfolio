import {
  ArrowDownLeft,
  ArrowRight,
  ArrowUpRight,
  Bell,
  Check,
  Coffee,
  Command,
  CreditCard,
  LayoutGrid,
  ListTodo,
  MoreHorizontal,
  Plus,
  Search,
  Settings,
  ShoppingBag,
  Ticket,
  Zap,
} from "lucide-react";

export function ProjectVisual({
  variant,
  detail = false,
}: {
  variant: "workspace" | "mobile";
  detail?: boolean;
}) {
  return (
    <div
      className={`project-visual ${variant}-visual ${detail ? "detail-visual" : ""}`}
      aria-hidden="true"
    >
      {variant === "workspace" ? (
        <>
          <div className="visual-wordmark">
            <Command size={19} /> folio
            <span>WORK, WITH A LITTLE MORE FOCUS.</span>
          </div>
          <div className="dashboard">
            <aside className="dashboard-sidebar">
              <div className="dash-logo">
                <Command size={18} /> folio<span>®</span>
              </div>
              <div className="sidebar-space">WORKSPACE</div>
              <div className="sidebar-item active">
                <LayoutGrid /> Overview
              </div>
              <div className="sidebar-item">
                <ListTodo /> My tasks <small>4</small>
              </div>
              <div className="sidebar-item">
                <Command /> Projects
              </div>
              <div className="sidebar-item">
                <Bell /> Inbox
              </div>
              <div className="sidebar-bottom">
                <Settings /> Settings<div className="avatar">A</div>
                <span>
                  Alex Morgan
                  <br />
                  <small>Personal workspace</small>
                </span>
              </div>
            </aside>
            <div className="dashboard-main">
              <div className="dash-topbar">
                Workspace{" "}
                <span>
                  <Search size={12} />
                  <Bell size={12} />
                  <span className="avatar mini">A</span>
                </span>
              </div>
              <div className="dash-heading">
                <div>
                  <span>MONDAY, A FRESH START</span>
                  <h3>
                    Your work, in focus<span>.</span>
                  </h3>
                  <p>A little structure. A lot of possibility.</p>
                </div>
                <span className="dash-new">
                  <Plus size={11} /> New project
                </span>
              </div>
              <div className="stat-row">
                <div>
                  <span>In progress</span>
                  <strong>
                    04 <ArrowUpRight />
                  </strong>
                </div>
                <div>
                  <span>For your review</span>
                  <strong>
                    02 <ArrowDownLeft />
                  </strong>
                </div>
                <div className="green-stat">
                  <span>Make room for good work.</span>
                  <Command />
                </div>
              </div>
              <div className="dash-projects-title">
                Your projects{" "}
                <span>
                  View all <ArrowRight size={10} />
                </span>
              </div>
              <div className="task-columns">
                <div className="task">
                  <span className="task-category">
                    DESIGN SYSTEM <MoreHorizontal size={13} />
                  </span>
                  <h4>A common language</h4>
                  <p>Foundations & components</p>
                  <div className="task-progress">
                    <i />
                  </div>
                  <div className="task-bottom">
                    <span className="avatar">A</span>
                    <span>In progress</span>
                  </div>
                </div>
                <div className="task">
                  <span className="task-category">
                    PRODUCT <MoreHorizontal size={13} />
                  </span>
                  <h4>The next chapter</h4>
                  <p>Workspace exploration</p>
                  <div className="task-progress second">
                    <i />
                  </div>
                  <div className="task-bottom">
                    <span className="avatar">J</span>
                    <span>In review</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="visual-bottom">
            <span>A clearer space for what’s next.</span>
            <span>01 / WEB</span>
          </div>
        </>
      ) : (
        <>
          <div className="mobile-wordmark">
            day<span>light</span>
            <span className="sun-icon">✳</span>
          </div>
          <div className="mobile-scene-copy">
            A little more
            <br />
            <em>everyday.</em>
          </div>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="floating-chip">
            <Check size={13} /> Your day. A little easier.
          </div>
          <div className="phone">
            <div className="phone-status">
              <span>9:41</span>
              <span className="phone-island" />
              <span>••• ▰</span>
            </div>
            <div className="phone-content">
              <div className="phone-greeting">
                Make yourself at home <span className="phone-avatar">A</span>
              </div>
              <h3>
                Good things,
                <br />
                closer to you<span> ✳</span>
              </h3>
              <div className="phone-search">
                <Search size={12} /> What’s on your mind?
              </div>
              <div className="service-grid">
                <div>
                  <span>
                    <Coffee />
                  </span>
                  Coffee
                </div>
                <div>
                  <span>
                    <ShoppingBag />
                  </span>
                  Shopping
                </div>
                <div>
                  <span>
                    <Ticket />
                  </span>
                  Experiences
                </div>
                <div>
                  <span>
                    <CreditCard />
                  </span>
                  Payments
                </div>
              </div>
              <div className="phone-section-title">
                A little inspiration <ArrowUpRight size={13} />
              </div>
              <div className="coffee-card">
                <div>
                  <small>YOUR DAILY PAUSE</small>
                  <h4>
                    Good days start
                    <br />
                    with good coffee.
                  </h4>
                  <span>
                    Find your next cup <ArrowRight size={10} />
                  </span>
                </div>
                <div className="coffee-cup">
                  <div />
                  <span />
                </div>
              </div>
              <div className="nearby-row">
                <Zap size={14} />
                <div>
                  Something good, nearby.
                  <br />
                  <small>Explore your neighborhood</small>
                </div>
                <ArrowUpRight size={15} />
              </div>
            </div>
            <div className="phone-nav">
              <span>
                <LayoutGrid size={16} />
                Discover
              </span>
              <span>
                <Search size={16} />
                Explore
              </span>
              <span>
                <Ticket size={16} />
                Activity
              </span>
            </div>
            <div className="phone-home-bar" />
          </div>
          <div className="mobile-visual-bottom">
            MANY LITTLE MOMENTS. ONE CONNECTED EXPERIENCE.
          </div>
        </>
      )}
    </div>
  );
}
