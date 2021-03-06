<li class="sidebar-item @if (request()->routeIs('dashboard')) active @endif">
    <a class="sidebar-link " href="{{ route('dashboard') }}">
        @svg('fluentui-box-24' ,'feather align-middle')<span class="align-middle">Dashboard</span>
    </a>
</li>
<li class="sidebar-item  @if (request()->routeIs('profile')) active @endif">
    <a class="sidebar-link " href="{{ route('profile') }}">
        <i class="align-middle" data-feather="user"></i>
        <span class="align-middle">Perfil</span>
    </a>
</li>
@if (request()->routeIs('payment_invoices'))
    <li class="sidebar-item  active">
        <a class="sidebar-link " href="">
            @svg('phosphor-printer','feather align-middle')
            <span class="align-middle">Recibo</span>
        </a>
    </li>
@endif
<li class="sidebar-item @if (request()->routeIs('finances*')) active @endif">
    <a class="sidebar-link " href="{{ route('finances') }}">
        @svg('phosphor-chart-line-up-fill' ,'feather align-middle')<span class="align-middle">Relatórios</span>
    </a>
</li>
<li class="sidebar-item @if (request()->routeIs('registration.create')) active @endif">
    <a class="sidebar-link " href="{{ route('registration.create') }}">
        <i class="align-middle" data-feather="edit"></i> <span class="align-middle">Matricular</span>
    </a>
</li>
@if (request()->routeIs('registration.edit'))
    <li class="sidebar-item active">
        <a class="sidebar-link " href="{{ route('registration.edit', $registration->id) }}">
            <i class="align-middle" data-feather="edit-3"></i> <span class="align-middle">
                Actuzação de matrícula
            </span>
        </a>
    </li>
@endif
<li class="sidebar-item @if (request()->routeIs('student.*')) active @endif">
    <a class="sidebar-link " href="{{ route('student.index') }}">
        @svg('phosphor-student-duotone' ,'feather align-middle') <span class="align-middle">Estudantes</span>
    </a>
</li>
<li class="sidebar-header">
    Configurações de Pagamentos
</li>
<li class="sidebar-item @if (request()->routeIs('veicle_class.*')) active @endif">
    <a class="sidebar-link " href="{{ route('veicle_class.index') }}">
        @svg('fluentui-contact-card-ribbon-16','feather align-middle')
        <span class="align-middle">Tipo de carta</span>
    </a>
</li>
<li class="sidebar-item @if (request()->routeIs('exam_type.*')) active @endif">
    <a class="sidebar-link " href="{{ route('exam_type.index') }}">
        @svg('fluentui-text-bullet-list-square-edit-24-o','feather align-middle')
        <span class="align-middle">Tipo de Exame</span>
    </a>
</li>
<li class="sidebar-header">
    Configurações
</li>
<li class="sidebar-item @if (request()->routeIs('period.*')) active @endif">
    <a class="sidebar-link " href="{{ route('period.index') }}">
        <i class="fas fa-clock " data-feather="clock"></i>
        <span class="align-middle">Horário de aulas</span>
    </a>
</li>
<li class="sidebar-item @if (request()->routeIs('class_room.*')) active @endif">
    <a class="sidebar-link " href="{{ route('class_room.index') }}">
        @svg('phosphor-police-car-duotone','feather align-middle')
        <span class="align-middle">Turmas</span>
    </a>
</li>

<li class="sidebar-item @if (request()->routeIs('civil_state.*')) active @endif">
    <a class="sidebar-link " href="{{ route('civil_state.index') }}">
        @svg('css-ring','feather align-middle')
        <span class="align-middle">Estados civis</span>
    </a>
</li>
<li class="sidebar-item @if (request()->routeIs('payment_phase.*')) active @endif">
    <a class="sidebar-link " href="{{ route('payment_phase.index') }}">
        @svg('fluentui-payment-16-o','feather align-middle')
        <span class="align-middle">Fâses de pagamento</span>
    </a>
</li>
<li class="sidebar-item @if (request()->routeIs('user.*')) active @endif">
    <a class="sidebar-link " href="{{ route('user.index') }}">
        <i class="far fa-users align-middle" data-feather="users"></i>
        <span class="align-middle">Usuários</span>
    </a>
</li>
